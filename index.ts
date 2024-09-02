import { http } from '@ampt/sdk';
import express, { Router } from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Hello from the public api!' });
});

http.node.use(app);
