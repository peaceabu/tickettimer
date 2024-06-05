// src/App.js
import React from 'react';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='app-title'>Ticket Timer</h1>
        <h2 className='app-title2'>Booking Date Calculator</h2>
        <p className='styled-paragraph'>Ticket Timer helps you to Calculate from which date you can book IRCTC Train Ticket for Journey</p>
        <BookingForm />
      </header>
    </div>
  );
}

export default App;
