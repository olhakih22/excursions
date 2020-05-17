const express = require('express'), path = require('path');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/excursion";

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('hello')
})


const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/comments', require('./routes/massedgeRout'));
app.use('/api/personal', require('./routes/personal'));
app.use('/api/filial', require('./routes/filial'));
app.use('/api/city', require('./routes/city'));
app.use('/api/excursion', require('./routes/excursion'));
app.use('/api/zakaz', require('./routes/zakaz'));

app.listen(3000, () => {
    console.log(3000);
});
