import { Request, Response } from 'express';
import * as orderWebhookService from '../services/orderWebhookService';
import { DraftOrder } from '../types';

export const createOrder = async (req: Request, res: Response) => {
  const draftOrder = req.body as DraftOrder;

  await orderWebhookService.create(draftOrder);

  res.status(200).send({ message: 'Success' });
};
