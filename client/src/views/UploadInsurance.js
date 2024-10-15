import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientContext } from '../context/PatientContext'; // Import PatientContext

const UploadInsurance = () => {
  const { updatePatientData } = useContext(PatientContext);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Get the uploaded file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        updatePatientData({ insuranceCardImage: reader.result }); // Save base64-encoded image in context
        navigate('/schedule-appointment');
      };
    } else {
      navigate('/schedule-appointment'); // Proceed if no image uploaded
    }
  };

  return (
    <div className="upload-insurance-container">
      <h1>Upload Insurance Card</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default UploadInsurance;
