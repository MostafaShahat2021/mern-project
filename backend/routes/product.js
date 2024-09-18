import express from 'express';
import { addProduct } from '../controller/product.controller.js';
const router = express.Router();

export const productsRouter = router.post('/products', addProduct)