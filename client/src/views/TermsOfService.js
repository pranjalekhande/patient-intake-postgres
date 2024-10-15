import React, { useContext, useState } from 'react';
import { PatientContext } from '../context/PatientContext'; // Import PatientContext
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const { patientData, updatePatientData } = useContext(PatientContext);
  const [tosAccepted, setTosAccepted] = useState(patientData.tosAccepted);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!tosAccepted) {
      alert('You must accept the Terms of Service to proceed.');
      return;
    }

    updatePatientData({ tosAccepted: true });

    try {
      const response = await fetch('http://localhost:5001/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...patientData, tosAccepted: true }), // Send all patient data in one request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Patient data submitted successfully:', result);
      navigate('/'); // Navigate to a success page or home
    } catch (error) {
      console.error('Error submitting patient data:', error);
    }
  };

  return (
    <div className="terms-of-service-container">
      <h1>Terms of Service</h1>
      
      <p>Terms of service also known as terms of use and terms and conditions, 
        commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements 
        between a service provider and a person who wants to use that service. 
        The person must agree to abide by the terms of service in order to use the offered service.
        [1] Terms of service can also be merely a disclaimer, especially regarding the use of websites. 
        Vague language and lengthy sentences used in these terms of service have caused 
        concerns about customer privacy and raised public awareness in many ways.</p>


      <p>By clicking submit, you agree to our terms of service.</p>
      <input
        type="checkbox"
        checked={tosAccepted}
        onChange={(e) => setTosAccepted(e.target.checked)}
      />
      <label>I accept the Terms of Service</label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TermsOfService;
