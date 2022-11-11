const { Schema } = require('mongoose');
const moment = require("moment");


// Schema to create a course model
const reactionSchema = new Schema(
  {
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
      get: (timeStamp) => { moment(timeStamp).format('DD MM, YYYY [at] hh:mm')}
    },    
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
 );

// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;
