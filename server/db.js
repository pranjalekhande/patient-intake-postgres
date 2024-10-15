import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();  // This should be called before accessing process.env

// Initialize Sequelize with PostgreSQL connection details
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,  // Disable logging for production
});

export default sequelize;
