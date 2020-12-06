import { Router } from 'express';

import BoardController from '../Controllers/BoardController';

const routes = Router();

routes.get('/boards/list', BoardController.list);
routes.post('/boards/create', BoardController.create);

export default routes;
