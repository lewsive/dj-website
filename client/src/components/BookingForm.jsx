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
  const [extras, setExtras] = useState([]);
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

  const toggleExtra = (optionName) => {
    if (extras.includes(optionName)) {
      setExtras(extras.filter(e => e !== optionName));
    } else {
      setExtras([...extras, optionName]);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      ...formData,
      event_type: eventType || 'General Event',
      extras: extras.length ? extras.join(', ') : 'None selected',
      to_email: 'dj@cossyn.com',
    };

    emailjs.send('service_quqpjcp', 'template_pm2j4ze', templateParams, 'lmlafvyDt3yx8aeOH')
      .then(() => {
        setStatus('✅ Booking request sent!');
        setFormData({ user_name: '', user_email: '', message: '' });
        setExtras([]);
      })
      .catch(err => {
        console.error('Failed to send:', err);
        setStatus('❌ Failed to send booking request.');
      });
  };

  const extraOptions = [
    { name: 'Lighting Package (includes smoke machine)', price: 500 },
    { name: '360° Photo Booth', price: 200 },
    { name: 'Smoke Machine', price: 200 },
    { name: 'Subwoofer', price: 500 }
  ];

  return (
    <div className="form-container" style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>
        Book {eventType || 'an Event'}
      </h2>

      <form onSubmit={sendEmail}>
        {/* Name */}
        <div className="form-group" style={{ marginBottom: 20 }}>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div className="form-group" style={{ marginBottom: 20 }}>
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>

        {/* Message */}
        <div className="form-group" style={{ marginBottom: 20 }}>
          <label htmlFor="message">Event Details</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me more about your event"
            rows={5}
          />
        </div>

        {/* Extras */}
        <div className="form-group" style={{ marginBottom: 20 }}>
          <label style={{ fontWeight: 'bold', marginBottom: 8, display: 'block', color: '#000' }}>Extras</label>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {extraOptions.map(option => {
  const selected = extras.includes(option.name);
  return (
    <button
      type="button"
      key={option.name}
      onClick={() => toggleExtra(option.name)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 14px',
        borderRadius: 6,
        border: selected ? '2px solid #16a34a' : '2px solid #ccc',
        backgroundColor: selected ? '#16a34a' : '#f0f0f0',
        color: '#fff',  // always white text
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: '500',
        minWidth: '180px',
        transition: 'background-color 0.2s, border-color 0.2s',
      }}
    >
      <span>{option.name}</span>
      <span>${option.price}</span>
    </button>
  );
})}



          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: '100%',
            maxWidth: 320,
            margin: '0 auto',
            padding: 14,
            background: '#3b82f6',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            cursor: 'pointer',
            display: 'block',
            userSelect: 'none',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#2563eb'}
          onMouseOut={e => e.currentTarget.style.background = '#3b82f6'}
        >
          Submit Booking Request
        </button>

        {status && (
          <p style={{ marginTop: 15, textAlign: 'center' }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
