import express from 'express';
import { addProduct, deleteProduct } from '../controller/product.controller.js';
const router = express.Router();

router.route('/products')
  .post(addProduct);

router.route('/products/:id').delete(deleteProduct)
export const productsRouter = router;