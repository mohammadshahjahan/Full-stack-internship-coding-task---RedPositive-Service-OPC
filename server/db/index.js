const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  hobbies: [String],
});

const Person = mongoose.model("Person", personSchema);

module.exports = {
  Person,
};
