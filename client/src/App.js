import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './views/Welcome';
import Intake from './views/Intake';
import HealthQuestions from './views/HealthQuestions';
import InsuranceDetails from './views/InsuranceDetails';
import UploadInsurance from './views/UploadInsurance';
import ScheduleAppointment from './views/ScheduleAppointment';
import TermsOfService from './views/TermsOfService';
import { PatientProvider } from './context/PatientContext'; // Import the PatientProvider


function App() {
  return (
    <PatientProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/intake" element={<Intake />} />
            <Route path="/health-questions" element={<HealthQuestions />} />
            <Route path="/insurance-details" element={<InsuranceDetails />} />
            <Route path="/upload-insurance" element={<UploadInsurance />} />
            <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>
      </Router>
    </PatientProvider>
  );
}

export default App;