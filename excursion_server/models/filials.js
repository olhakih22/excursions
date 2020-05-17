const mongoose = require('mongoose');

const filialSchema = mongoose.Schema({
    name: String,
    about: String,
    tell: String,
    email: String,
    img: String
}, { versionKey: false });

const Filial = mongoose.model('filials', filialSchema);

module.exports = { Filial }
