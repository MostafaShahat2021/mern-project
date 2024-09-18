import 'dotenv/config'
import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(3000, () => console.log(`Server up & running on http://localhost:${PORT}`))