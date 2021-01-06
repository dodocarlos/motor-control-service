import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

export default async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  await schema.validate(req.body);
  return next();
};
