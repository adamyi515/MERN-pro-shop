import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.getMaxListeners(1)
    }
};


export default connectDB;