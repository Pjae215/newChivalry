
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: String, required: true },
  username: { type: String, required: true },
  zipcode: { type: String, required: true },
});

const records = mongoose.model("records", recordsSchema);

module.exports = records;