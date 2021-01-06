import { Request, Response } from 'express';

import CreateMotorService from '../services/CreateMotorService';
import ListMotorService from '../services/ListMotorService';

class BoardController {
  async list(_: Request, res: Response) {
    const boards = await ListMotorService.execute();
    res.json(boards);
  }

  async create(req: Request, res: Response) {
    const { board_id, name } = req.body;
    const board = await CreateMotorService.execute({ board_id, name });
    res.json(board);
  }
}

export default new BoardController();
