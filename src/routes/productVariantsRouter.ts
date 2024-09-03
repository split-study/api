import { Router } from 'express';
import { catchError } from '../utils/catchError';
import * as productVariantsController from '../controllers/productVariantsController';

export const productVariantsRouter = Router();

productVariantsRouter.post(
  '/',
  catchError(productVariantsController.getAllByProductId),
);

productVariantsRouter.put(
  '/update',
  catchError(productVariantsController.updateProductVariant),
);
