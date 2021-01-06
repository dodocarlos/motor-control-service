import Board from '@schemas/Board';

class ListBoardService {
  async execute() {
    return Board.scan().exec();
  }
}

export default new ListBoardService();
