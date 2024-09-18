import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {})

app.listen(3000, () => {
  connectDB();
  console.log(`Server up & running on http://localhost:${PORT}`);
});
