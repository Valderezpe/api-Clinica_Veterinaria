import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

function validatePayload(schema: ObjectSchema, key: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[key]);

    if (error) {
      const message = "Invalid Payload";

      return res.status(400).json({ message, error: error.message });
    }

    next();
  };
}

export function validateBody(schema: ObjectSchema) {
  return validatePayload(schema, "body");
}

export function validateParams(schema: ObjectSchema) {
  return validatePayload(schema, "params");
}
