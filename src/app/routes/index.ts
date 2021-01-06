import { Router } from 'express';

import boardRoutes from './boardRoutes';
import motorRoutes from './motorRoutes';

const routes = Router();

routes.use(boardRoutes);
routes.use(motorRoutes);

export default routes;
