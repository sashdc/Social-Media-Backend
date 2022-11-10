const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
      userName: {
      type: String,
      required: true,
      unique : true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique : true,
      match: /.+\@.+\..+/
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('No. of Friends').get(function () {
  return this.friends.length;
});

module.exports = userSchema;
