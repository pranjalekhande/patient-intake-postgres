import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Intake.css'; // Assuming you add styles in this CSS file
import { PatientContext } from '../context/PatientContext'; // Import the PatientContext


const Intake = () => {
  const { patientData, updatePatientData } = useContext(PatientContext);
  const [formData, setFormData] = useState({
    firstName: patientData.firstName,
    middleName: patientData.middleName,
    lastName: patientData.lastName,
    mobileNumber: patientData.mobileNumber,
    email: patientData.email,
    mailingAddress: patientData.mailingAddress,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePatientData(formData); // Save form data in context
    navigate('/health-questions');
  };

  return (
    <div className="intake-form-container">
      <h1>Patient Intake Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
        />
        <input
          name="mailingAddress"
          value={formData.mailingAddress}
          onChange={handleChange}
          placeholder="Mailing Address"
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};
export default Intake;