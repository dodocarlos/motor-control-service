import { Router } from 'express';

import BoardController from '../Controllers/BoardController';
import CreateBoardValidator from '../validators/CreateBoardValidator';

const routes = Router();

routes.get('/boards/list', BoardController.list);
routes.post('/boards/create', CreateBoardValidator, BoardController.create);

export default routes;
