const express = require('express');
const router = express.Router();
const { City } = require("../models/city");
const { Excursion } = require("../models/excursion");



router.get('/', (req, res)=>{


    (async () => {
        let excursion = await Excursion.find({});
        
        // City.create({
        //     id: 1,
        //     name: 'Львів',
        //     excursion: [excursion[0], excursion[1], excursion[2], excursion[3]],
        //     img: 'https://lh3.googleusercontent.com/proxy/9ls0BHctmdA6o1DkVvDCKailZjLlQDTVkBD7W_8ityOQJB8e4WJWKTrLfzDuEyKgFNiqX7B8IOJwD1JVYCBPUl0KCrINh09dJ2fURIVJmnQCX__k3XT8mYbV6y6sfg'
        // });
        
        // City.create({
        //     id: 2,
        //     name: 'Київ',
        //     excursion:[excursion[7], excursion[8] , excursion[6]],
        //     img: 'https://petrimazepa.com/sites/default/files/2018-09/maxresdefault.jpg'
        // });
        //
        // City.create({
        //     id: 3,
        //     name: 'Одеса',
        //     excursion:[excursion[4], excursion[5] ],
        //     img: 'https://images6.alphacoders.com/485/485809.jpg'
        // });

        

        let city = await City.find({});
        
        res.send(city)


    })();

});
router.get('/:id', (req, res)=>{


    (async () => {

        let city = await City.findOne({id: req.params.id});

        res.send(city)


    })();

});

module.exports = router;
