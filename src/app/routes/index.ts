import { Router } from 'express';

import boardRoutes from './boardRoutes';

const routes = Router();

routes.use(boardRoutes);

export default routes;
