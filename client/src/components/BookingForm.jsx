// src/components/BookingForm.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles.css';

const BookingForm = () => {
  const location = useLocation();
  const [eventType, setEventType] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type') || '';
    setEventType(type);
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      ...formData,
      event_type: eventType || 'General Event',
      to_email: 'dj@cossyn.com',
    };

    emailjs.send('service_quqpjcp', 'template_pm2j4ze', templateParams, 'lmlafvyDt3yx8aeOH')
      .then(() => {
        setStatus('✅ Booking request sent!');
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch(err => {
        console.error('Failed to send:', err);
        setStatus('❌ Failed to send booking request.');
      });
  };

  return (
    <div className="form-container" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2 className="form-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        Book {eventType || 'an Event'}
      </h2>
      <form onSubmit={sendEmail} className="form">
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="user_name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px'
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="user_email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px'
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Event Details</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me more about your event"
            rows="5"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px'
            }}
          />
        </div>

        <button
          type="submit"
          className="form-button"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3B82F6',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2563EB'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3B82F6'}
        >
          Submit Booking Request
        </button>

        {status && (
          <p className="status-msg" style={{ marginTop: '15px', textAlign: 'center' }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
