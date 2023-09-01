import asyncHandler from '../middleware/asyncHandler.js';

// Models
import Product from '../models/productModel.js';

// Event Handler ///////////////////////////////////////////////////////////////////////////////
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.status(200).json({
        status: 'success',
        numOfItems: products.length,
        products: products
    });
})


// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  Public
const getProductItem = asyncHandler(async (req, res) => {
    const getProduct = await Product.findById(req.params.id);

    if(getProduct){
        return res.status(200).json({
            status: 'success',
            product: getProduct
        });
    } else {
        res.status(404);
        throw new Error('Resource not found.');
    }

})



// @desc    Delete a product
// @route   GET /api/products/:id
// @access  Private
const deleteProductItem = asyncHandler(async (req, res) => {
    const getProductToDelete = products.find(product => product._id === req.params.id);
    res.json(getProductToDelete);
});


export { getAllProducts, getProductItem, deleteProductItem };