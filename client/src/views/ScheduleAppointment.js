import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/ScheduleAppointment.css';
import { PatientContext } from '../context/PatientContext'; // Import PatientContext


const ScheduleAppointment = () => {
  const { patientData, updatePatientData } = useContext(PatientContext);
  const [appointmentDate, setAppointmentDate] = useState(patientData.appointmentDate?.split('T')[0] || ''); // Date part
  const [appointmentTime, setAppointmentTime] = useState(patientData.appointmentDate?.split('T')[1]?.slice(0, 5) || ''); // Time part

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointmentDate && appointmentTime) {
      const combinedDateTime = `${appointmentDate}T${appointmentTime}:00`; // Combine date and time into ISO format
      updatePatientData({ appointmentDate: combinedDateTime }); // Save in context
      navigate('/terms-of-service'); // Proceed to the next step
    } else {
      alert('Please select both a date and time for the appointment.');
    }
  };

  return (
    <div className="schedule-appointment-container">
      <h1>Schedule Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="appointment-date">Select Date:</label>
        <input
          type="date"
          id="appointment-date"
          value={appointmentDate}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="appointment-time">Select Time:</label>
        <input
          type="time"
          id="appointment-time"
          value={appointmentTime}
          onChange={handleTimeChange}
          required
        />

        <button type="submit" className="submit-btn">Next</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
