import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

connectDB();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/products',productRoutes);


app.listen(port, () => console.log(`Server running on port ${port}!`));
