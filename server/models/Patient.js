import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Import the Sequelize instance

// Define the Patient model using Sequelize
const Patient = sequelize.define('Patient', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middleName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mailingAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  healthQuestions: {
    type: DataTypes.JSONB,  // Store health questions as JSON
  },
  insuranceDetails: {
    type: DataTypes.JSONB,  // Store insurance details as JSON
  },
  insuranceCardImage: {
    type: DataTypes.TEXT  // Base64 encoded image can be large, use TEXT
  },
  appointmentDate: {
    type: DataTypes.DATE,  // PostgreSQL native date type
  },
  tosAccepted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true  // Automatically adds `createdAt` and `updatedAt` fields
});

export default Patient;
