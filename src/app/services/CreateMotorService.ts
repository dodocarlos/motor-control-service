import { v4 as uuid } from 'uuid';

import Board from '@schemas/Motor';

interface IMotorCreate {
  name: String;
  board_id: string;
}

class CreateMotorService {
  async execute({ name, board_id }: IMotorCreate) {
    return Board.update({
      motor_id: uuid(),
      board_id,
      name,
    });
  }
}

export default new CreateMotorService();
