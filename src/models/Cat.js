const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  breed: {
    type: String,
  },
});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;
