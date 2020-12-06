import { Errback, Request, Response } from 'express';

import logger from '@config/logger';

export default async (
  err: Errback,
  _: Request,
  res: Response
): Promise<Response<unknown>> => {
  logger(err);

  return res
    .status(500)
    .json({ message: 'Internal server error', category: 'INTERNAL_ERROR' });
};
