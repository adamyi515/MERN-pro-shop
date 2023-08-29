import express from 'express';
const app = express();

import products from './data/products.js';

app.get('/', (req, res) => {
    res.send('This is a test');
});


app.get('/products', (req, res) => {
    res.json(products);
});






const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})