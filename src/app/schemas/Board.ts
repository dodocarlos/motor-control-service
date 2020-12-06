import dynamoose from '@config/database';

const schema = new dynamoose.Schema(
  {
    board_id: {
      type: String,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export default dynamoose.model('Boards', schema, {
  throughput: 'ON_DEMAND',
});
