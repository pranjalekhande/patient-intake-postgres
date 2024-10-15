
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../HealthQuestions.css';
import { PatientContext } from '../context/PatientContext'; // Import the PatientContext


const HealthQuestions = () => {
  const { patientData, updatePatientData } = useContext(PatientContext);
  const [healthData, setHealthData] = useState({
    grayHairBeforeChildren: patientData.healthQuestions.grayHairBeforeChildren,
    brokenBoneAfter16: patientData.healthQuestions.brokenBoneAfter16,
    tripOverSmallStones: patientData.healthQuestions.tripOverSmallStones,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHealthData({ ...healthData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePatientData({ healthQuestions: healthData }); // Save health questions in context
    navigate('/insurance-details');
  };

  return (
    <div className="health-questions-container">
      <h1>Health Questions</h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label>Did you have gray hair before having children?</label>
          <div>
            <input
              type="radio"
              name="grayHairBeforeChildren"
              value="yes"
              onChange={handleChange}
              required
            />
            Yes
            <input
              type="radio"
              name="grayHairBeforeChildren"
              value="no"
              onChange={handleChange}
              required
            />
            No
          </div>
        </div>
        <div className="question">
          <label>Have you ever broken a bone after 16 years old?</label>
          <div>
            <input
              type="radio"
              name="brokenBoneAfter16"
              value="yes"
              onChange={handleChange}
              required
            />
            Yes
            <input
              type="radio"
              name="brokenBoneAfter16"
              value="no"
              onChange={handleChange}
              required
            />
            No
          </div>
        </div>
        <div className="question">
          <label>Do you trip over small stones while walking?</label>
          <div>
            <input
              type="radio"
              name="tripOverSmallStones"
              value="yes"
              onChange={handleChange}
              required
            />
            Yes
            <input
              type="radio"
              name="tripOverSmallStones"
              value="no"
              onChange={handleChange}
              required
            />
            No
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default HealthQuestions;
