import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
import {productsRouter} from './routes/product.js';

app.use(express.json())

app.use('/api/', productsRouter);

app.listen(3000, () => {
  connectDB();
  console.log(`Server up & running on http://localhost:${PORT}`);
});
