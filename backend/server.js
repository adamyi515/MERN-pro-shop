import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


dotenv.config();
const app = express();
app.use(cors());
connectDB();



// Import routes
import productRoutes from './routes/productRoutes.js';


// Routes /////////////////////////////////////////////////////////////////////////////////
app.use('/api/products', productRoutes);


// Middlewares
app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})