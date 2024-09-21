import express from 'express';
import { addProduct } from '../controller/product.controller.js';
const router = express.Router();

router.route('/products')
  .post(addProduct);

export const productsRouter = router;