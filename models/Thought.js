const { Schema, model, Types } = require('mongoose');
// const { reactionSchema } = require('./Reaction');
const moment = require("moment");

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
    username: {
      type: String,
      required : true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) =>  moment(timeStamp).format('DD MM, YYYY [at] hh:mm a')
    },    
  },
  {
    toJSON: {
      getters: true,
    },
  },
  { 
    id: false,
  }
);

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
      get: (timeStamp) =>  moment(timeStamp).format('DD MM, YYYY [at] hh:mm a')

    },
    username: 
      {
        type: String,
        required: true
      },
    
    reactions: [reactionSchema],
      
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);


thoughtSchema.virtual('No of Reactions').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);
const Reaction = model('reaction', reactionSchema);

module.exports = Thought;
