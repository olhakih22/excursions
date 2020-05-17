const mongoose = require('mongoose');

const personalSchema = mongoose.Schema({
    name: String,
    work: String,
    about: String,
    img: String
}, { versionKey: false });

const Personal = mongoose.model('personals', personalSchema);

module.exports = { Personal }
