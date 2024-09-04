import express from 'express';
import cors from 'cors';
import { http } from '@ampt/sdk';
import { errorMiddleware } from './src/middlewares/errorMiddleware';
import {
  productRouter,
  productVariantsRouter,
  orderWebhookRouter,
} from './src/routes';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/products', productRouter);
app.use('/product-variants', productVariantsRouter);
app.use('/order-webhook', orderWebhookRouter);

app.use(errorMiddleware);

http.node.use(app);
