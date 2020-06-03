const mongose = require("mongoose");

const Schema = mongose.Schema;

let listing = new Schema({
  business_type: {
    type: String,
  },
  review: {
    type: Number,
  },
  name: {
    type: String,
  },
  stree_address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: Number,
  },
  phone_number: {
    type: String,
  },
  website: {
    type: String,
  },
});

module.exports = mongose.model("listing", listing);
