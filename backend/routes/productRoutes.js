import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asyncHandler.js';

// Models
import Product from '../models/productModel.js';


// Event Handler ///////////////////////////////////////////////////////////////////////////////
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.status(200).json({
        status: 'success',
        numOfItems: products.length,
        products: products
    });
})

const getProductItem = asyncHandler(async (req, res) => {
    const getProduct = await Product.findById(req.params.id);

    if(getProduct){
        return res.status(200).json({
            status: 'success',
            product: getProduct
        });
    }

    return res.status(500).json({
        status: 'fail',
    });

})

const deleteProductItem = asyncHandler(async (req, res) => {
    const getProductToDelete = products.find(product => product._id === req.params.id);
    res.json(getProductToDelete);
})


// Routes /////////////////////////////////////////////////////////////////////////////////////
router.route('/')
    .get(getAllProducts);

router.route('/:id')
    .get(getProductItem)
    .delete(deleteProductItem);



export default router;