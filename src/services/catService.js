const Cat = require("../models/Cat");

exports.create = (catData) => Cat.create(catData);

exports.getAll = () => Cat.find();

exports.getSingleCat = (catId) => Cat.findById(catId);

exports.update = (catId, catData) => Cat.findByIdAndUpdate(catId, catData);

exports.delete = (catId) => Cat.findByIdAndDelete(catId);

