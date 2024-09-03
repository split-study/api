import { ERROR_CODE } from '../constants/error_codes';

type ErrorObj = Record<string, any>;

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public errors: ErrorObj = {},
  ) {
    super(message);

    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors: ErrorObj = {}) {
    return new ApiError(400, message, errors);
  }

  static NotFound() {
    return new ApiError(404, ERROR_CODE.notFound);
  }
}
