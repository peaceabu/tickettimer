// src/BookingForm.js
import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [journeyDate, setJourneyDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setJourneyDate(today);
  }, []);

  const [bookingDate, setBookingDate] = useState('');

  const handleDateChange = (e) => {
    setJourneyDate(e.target.value);
  };

  const calculateBookingDate = (date) => {
    const journey = new Date(date);
    journey.setDate(journey.getDate() - 120);
    const day = String(journey.getDate()).padStart(2, '0');
    const month = String(journey.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = journey.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = calculateBookingDate(journeyDate);
    setBookingDate(date);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='date-label'>
          Date of Journey :
        
        </label>
        <input
            type="date"
            value={journeyDate}
            onChange={handleDateChange}
            className="date-input"
            required
          />
        <button type="submit">Calculate Booking Date</button>
      </form>
      {bookingDate && (
        <div>
          <h3>You can start booking from: {bookingDate}</h3>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
