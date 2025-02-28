import { NextFunction, Request, Response } from 'express';

export const notFoundAPI = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(404).json({
    success: false,
    message: err.message,
    totalError: {},
  });
};
