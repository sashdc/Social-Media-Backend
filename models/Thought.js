const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText:{
      type: String,
      required : true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: 
      {
        type: Schema.Types.String,
        required: true
      },
    
    reactions: [reactionSchema],
      
  },
  {
    toJSON: {
      // getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('No. of Reactions').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
