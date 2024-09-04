import { Router } from 'express';
import * as orderWebhookController from '../controllers/orderWebhookController';
import { catchError } from '../utils/catchError';

export const orderWebhookRouter = Router();

orderWebhookRouter.post(
  '/create',
  catchError(orderWebhookController.createOrder),
);
