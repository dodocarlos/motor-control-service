import { Router } from 'express';

import MotorController from '../Controllers/MotorController';
import CreateMotorValidator from '../validators/CreateMotorValidator';

const routes = Router();

routes.get('/motors/list', MotorController.list);
routes.post('/motors/create', CreateMotorValidator, MotorController.create);

export default routes;
