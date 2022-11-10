const { Schema, model } = require('mongoose');

// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody:{
      type: String,
      required : true,
      maxlength: 280,
      minlength: 1,
    },
    userName: {
      type: String,
      required : true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
