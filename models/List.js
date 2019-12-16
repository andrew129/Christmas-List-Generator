const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: {type: String, required: true, unique: true},
  itemOne: {type: String},
  itemTwo: {type: String},
  itemThree: {type: String},
  images: {type: Array} 
});

const List = mongoose.model("List", listSchema);

module.exports = List;