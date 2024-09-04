import { Router } from 'express';
import { catchError } from '../utils/catchError';
import * as productController from '../controllers/productController';

export const productRouter = Router();

productRouter.get('/', catchError(productController.getAll));
