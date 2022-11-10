const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
  {
      username: {
      type: String,
      required: true,
      unique : true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique : true,
      validate: { 
        validator: function(v) {
            return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        }
    }},
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

const User = model('user', userSchema);


module.exports = User;
