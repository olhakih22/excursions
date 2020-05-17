const mongoose = require('mongoose');

const Type = mongoose.Schema({ types: {type: String} });

const excursionSchema = mongoose.Schema({
    id: String,
    name: String,
    allType: [Type],
    prise: Number,
    date: String,
    freeSits: Number,
    img: String
}, { versionKey: false });

const Excursion = mongoose.model('excursions', excursionSchema);

module.exports = { Excursion }
