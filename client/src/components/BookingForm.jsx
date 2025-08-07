import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', date: '', eventType: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setMessage('Error submitting booking.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
      <input name="date" type="date" onChange={handleChange} required /><br />
      <input name="eventType" placeholder="Event Type" onChange={handleChange} required /><br />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}
