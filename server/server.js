import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sequelize from './db.js';  // Import the Sequelize instance


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });


const app = express();
const PORT = process.env.PORT || 5000;



// Increase the request body size limit
app.use(express.json({ limit: '10mb' }));  // Increase the limit to 10MB
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors({
  origin: '*', // Allow all origins (for testing only, not recommended for production)
}));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());


sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connected');
    return sequelize.sync();  // This creates the tables if they don't exist
  })
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => console.log('Error connecting to the database:', err));


// Import routes here
import patientRoutes from './routes/Patient.js';
app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;


