import express from 'express';
import Patient from '../models/Patient.js';

const router = express.Router();
// In your patient.js route
router.post('/', async (req, res) => {
  try {
    // Create a new patient using Sequelize
    const patient = await Patient.create(req.body);  // Sequelize handles validation based on model definition
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.findAll();  // Sequelize fetches all patients
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes as needed (update, delete, etc.)

export default router;
