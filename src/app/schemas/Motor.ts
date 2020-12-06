import dynamoose from '@config/database';

const schema = new dynamoose.Schema(
  {
    board_id: {
      type: String,
      hashKey: true,
    },
    motor_id: {
      type: String,
      rangeKey: true,
    },
    name: {
      type: String,
      required: true,
    },
    schedules: Object,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export default dynamoose.model('Motors', schema, {
  throughput: 'ON_DEMAND',
});
