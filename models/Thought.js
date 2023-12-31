const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');
function getTimeStampDate(date){
  return dayjs(date).format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')
}
// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 0,
      max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
      get: timeStamp => getTimeStampDate(timeStamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
