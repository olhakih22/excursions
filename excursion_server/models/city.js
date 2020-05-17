const mongoose = require('mongoose');
const Schema = require("mongoose");


const Type = mongoose.Schema({ types: {type: String} });
const Excursion = mongoose.Schema({ id: String,
    name: String,
    allType: [Type],
    prise: Number,
    date: String,
    freeSits: Number,
    img: String });



const citySchema = mongoose.Schema({
    id: Number,
    name: String,
    excursion: [Excursion],
    img: String
}, { versionKey: false });

const City = mongoose.model('cities', citySchema);

module.exports = { City }
