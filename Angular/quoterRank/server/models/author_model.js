const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    name: { type: String, minlength: [3, 'Name must be atleast 3 characters'] },
    quotes: [],
});