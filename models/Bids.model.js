const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

require("./Art.model")
require("./User.model")

const bidsSchema = new mongoose.Schema({
    userId: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    bid: {
        type: String,
        
  },
  user: {
    ref: "user",
    type: Schema.Types.ObjectId
  }, 
  artId : {
    ref: "art",
    type: Schema.Types.ObjectId
  }
  }, { timestamps: true });

const BidsModel = model("bids", bidsSchema);

module.exports = BidsModel;
