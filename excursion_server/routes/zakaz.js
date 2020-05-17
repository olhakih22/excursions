const express = require('express');
const router = express.Router();
const { Zakaz } = require("../models/bron");
const { City } = require("../models/city");

router.post('/', (req, res)=>{


    (async () => {
        console.log(req.body);
        const citys = await City.findOne({_id: req.body.cityName})
        console.log(citys);
        const id = req.body.excursionId;
       
        

        

        Zakaz.create({
            name: req.body.name,
            email: req.body.email,
            excursionId: +id,
            nameExcursion: req.body.nameExcursion,
            cityName: citys.name,
            prise: req.body.prise,
            seats: req.body.seats,
            date: req.body.date
        });
        res.send(req.body)

    })();

});
module.exports = router;
