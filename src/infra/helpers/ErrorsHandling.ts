import { NextFunction, Request, Response } from "express";
import { BussinesError, NotFoundError, UnauthorizedError } from "./Erros";
import { HttpStatusCode } from "./HttpStatusCode";

export const errorHandLing = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;

  if (error instanceof NotFoundError) statusCode = HttpStatusCode.NOT_FOUND;
  if (error instanceof UnauthorizedError)
    statusCode = HttpStatusCode.UNAUTHORIZED;
  if (error instanceof BussinesError)
    statusCode = HttpStatusCode.UNPROCESSABLE_ENTITY;

  return res.status(statusCode).json(responseErrorFormatter(error));
};

function responseErrorFormatter(error: Error) {
  return {
    name: error.name,
    message: error.message,
  };
}
