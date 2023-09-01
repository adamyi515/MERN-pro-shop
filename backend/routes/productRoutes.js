import express from 'express';
const router = express.Router();
import {
    deleteProductItem, getAllProducts, getProductItem
} from '../controllers/productController.js';


// Routes /////////////////////////////////////////////////////////////////////////////////////
router.route('/')
    .get(getAllProducts);

router.route('/:id')
    .get(getProductItem)
    .delete(deleteProductItem);



export default router;