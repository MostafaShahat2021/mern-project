import express from 'express';
import { addProduct, deleteProduct, getProducts } from '../controller/product.controller.js';
const router = express.Router();

router.route('/products').get(getProducts)
  .post(addProduct);

router.route('/products/:id').delete(deleteProduct)
export const productsRouter = router;