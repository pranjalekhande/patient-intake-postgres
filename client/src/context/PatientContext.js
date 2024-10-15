import React, { createContext, useState } from 'react';

// Create the context
export const PatientContext = createContext();

// Provider component to wrap around the app
export const PatientProvider = ({ children }) => {
  const [patientData, setPatientData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    mailingAddress: '',
    healthQuestions: {
      grayHairBeforeChildren: '',
      brokenBoneAfter16: '',
      tripOverSmallStones: '',
    },
    insuranceDetails: {
      carrier: '',
      policyNumber: '',
    },
    insuranceCardImage: '',
    appointmentDate: null,
    tosAccepted: false,
  });

  const updatePatientData = (newData) => {
    setPatientData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <PatientContext.Provider value={{ patientData, updatePatientData }}>
      {children}
    </PatientContext.Provider>
  );
};
