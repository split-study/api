import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError';
import { ERROR_CODE } from '../constants/error_codes';

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ApiError) {
    const { status, errors, message } = error;

    res.status(status).send({ message, errors });
  }

  res
    .status(500)
    .send({ message: error?.message || ERROR_CODE.serverError, errors: {} });
};
