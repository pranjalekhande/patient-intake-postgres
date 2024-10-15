import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientContext } from '../context/PatientContext'; // Import PatientContext

const InsuranceDetails = () => {
  const { patientData, updatePatientData } = useContext(PatientContext);
  const [insuranceData, setInsuranceData] = useState({
    carrier: patientData.insuranceDetails.carrier || '',
    policyNumber: patientData.insuranceDetails.policyNumber || '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInsuranceData({ ...insuranceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePatientData({ insuranceDetails: insuranceData }); // Save insurance details in context
    navigate('/upload-insurance');
  };

  return (
    <div className="insurance-details-container">
      <h1>Insurance Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="carrier"
          value={insuranceData.carrier}
          onChange={handleChange}
          placeholder="Insurance Carrier"
          required
        />
        <input
          name="policyNumber"
          value={insuranceData.policyNumber}
          onChange={handleChange}
          placeholder="Policy Number"
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default InsuranceDetails;
