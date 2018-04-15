const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/quoterRank');

let AuthorSchema = require('../models/author_model');

const Author = mongoose.model('Author', AuthorSchema);