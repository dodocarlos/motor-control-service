import Board from '@schemas/Board';

class BoardService {
  async execute() {
    return Board.scan().exec();
  }
}

export default new BoardService();
