import { Request, Response } from 'express';
import * as productVarisantsService from '../services/productVariantsService';

export const getAllByProductId = async (req: Request, res: Response) => {
  const { productId } = req.body as { productId: string };

  const productVariants =
    await productVarisantsService.getProductVariantsByProductId(productId);

  res.send(productVariants);
};

export const updateProductVariant = async (req: Request, res: Response) => {
  const { productId, variants } = req.body as {
    productId: string;
    variants: {
      id: string;
      price: string;
    };
  };

  const updatedProductVariants =
    await productVarisantsService.updateProductVariants(productId, variants);

  res.send(updatedProductVariants);
};
