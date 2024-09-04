import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getAll = async (req: Request, res: Response) => {
  const limit = +(req.query.limit ?? 10);
  const afterCursor = (req.query.afterCursor ?? null) as string | null;
  const beforeCursor = (req.query.beforeCursor ?? null) as string | null;

  const { products, pageInfo } = await productService.getAllProducts(
    limit,
    afterCursor,
    beforeCursor,
  );

  res.send({ products, pageInfo });
};
