import express from 'express';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../controller/product.controller.js';
const router = express.Router();

router.route('/').get(getProducts).post(addProduct);

router.route('/:id').patch(updateProduct).delete(deleteProduct);
export default router;
