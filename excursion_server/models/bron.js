const mongoose = require('mongoose');

const bronSchema = mongoose.Schema({
    name: String,
    email: String,
    excursionId: Number,
    nameExcursion: String,
    cityName: String,
    prise: Number,
    seats: Number,
    date: Date
}, { versionKey: false });

const Zakaz = mongoose.model('zakazs', bronSchema);

module.exports = { Zakaz }
