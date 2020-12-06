import { Request, Response } from 'express';

import CreateBoardService from '../services/CreateBoardService';
import ListBoardService from '../services/ListBoardService';

class BoardController {
  async list(_: Request, res: Response) {
    const boards = await ListBoardService.execute();
    res.json(boards);
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;
    const board = await CreateBoardService.execute({ name });
    res.json(board);
  }
}

export default new BoardController();
