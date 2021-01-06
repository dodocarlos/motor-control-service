import Motor from '@schemas/Motor';

class ListMotorService {
  async execute() {
    return Motor.scan().exec();
  }
}

export default new ListMotorService();
