const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');
function getTimeStampDate(date){
  return dayjs(date).format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')
}
// Schema created for reactions in the code and for testing
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timeStamp => getTimeStampDate(timeStamp)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
