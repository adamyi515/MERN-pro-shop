import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import products from './data/products.js';

app.get('/', (req, res) => {
    res.send('This is a test');
});


app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const getProduct = products.find(product => product._id === req.params.id);
    res.json(getProduct);
})

app.delete('/products/:id', (req, res) => {
    const getProductToDelete = products.find(product => product._id === req.params.id);
    res.json(getProductToDelete);
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})