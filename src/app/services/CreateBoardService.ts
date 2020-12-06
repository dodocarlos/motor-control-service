import { v4 as uuid } from 'uuid';

import Board from '@schemas/Board';

interface IBoardCreate {
  name: String;
}

class BoardService {
  async execute({ name }: IBoardCreate) {
    return Board.update({
      board_id: uuid(),
      name,
    });
  }
}

export default new BoardService();
