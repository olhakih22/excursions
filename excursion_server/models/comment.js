const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    name: String,
    date: Date,
    massage: String,
    rating: String
}, { versionKey: false });

const Comment = mongoose.model('comments', commentSchema);

module.exports = { Comment }
