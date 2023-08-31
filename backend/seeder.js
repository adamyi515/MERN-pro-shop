import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js'; // Dummy data
import products from './data/products.js'; // Dummy data

// Models
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();


const importData = async () => {
    try {
        // First, delete all data from our DB.
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // Create Data.
        const createdUsers = await User.insertMany(users);
        const getAdminUser = createdUsers[0]._id;

        // Returns a new array of objects (product) and add a new field called "user" and assign it to the admin.
        const sampleProducts = products.map(product => {
            return {
                ...product,
                user: getAdminUser
            }
        });

        // Insert all of the products with the user field mapped to the admin user.
        await Product.insertMany(sampleProducts);

        console.log('Data imported!');
        process.exit();
    } catch (error) {
        console.log(`${error}`)
        process.exit(1);
    }
}


const destroyData = async () => {
    try {
        // Delete all data from our DB.
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed!')
        process.exit();
    } catch (error) {
        console.log(`${error}`)
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}