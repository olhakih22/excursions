const express = require('express');
const router = express.Router();
const { Excursion } = require("../models/excursion");


router.get('/', (req, res)=>{


    (async () => {
        // Excursion.create({
        //     id: 1,
        //     name: 'Екскурсія Стрийським парком',
        //     allType: [{types: 'Одноденна'}, {types: 'Сімейний відпочинок'},{type: 'Оглядові'}],
        //     prise: 150,
        //     date: new Date(2020, 8, 22),
        //     freeSits: 20,
        //     img: 'https://zaxid.net/resources/photos/news/640x360_DIR/201611/1408872.jpg?201805260511'
        // });
        //
        // Excursion.create({
        //     id: 2,
        //     name: 'ПІШОХІДНА ЕКСКУРСІЯ СЕРЕДНЬОВІЧНИЙ ЛЬВІВ',
        //     allType: [{types: 'Одноденна'}, {types: 'Оглядові'}],
        //     prise: 100,
        //     date: new Date(2020, 5, 5),
        //     freeSits: 10,
        //     img: 'https://images.1plus1.ua/nocache/uploads/site/000/383/403/1470afeca23568fe124f3da5b29c0faf.jpg'
        // });
        //
        // Excursion.create({
        //     id: 3,
        //     name: 'АВТОБУСНА ЕКСКУРСІЯ ДАВНІМИ ПЕРЕДМІСТЯМИ',
        //     allType: [{types: 'Одноденна'}, {types: 'Тематична'},{types: 'Для жителів інших міст'}],
        //     prise: 150,
        //     date: new Date(2020, 7, 7),
        //     freeSits: 30,
        //     img: 'https://etnosvit.com/wp-content/uploads/2019/03/trips-lvov-600x400.jpg'
        // });
        //
        // Excursion.create({
        //     id: 4,
        //     name: 'Сесія у політесі',
        //     allType: [{types: 'Багатоденна'}, {types: 'Екстримальна'}],
        //     prise: 0,
        //     date: new Date(2020, 6, 6),
        //     freeSits: 20,
        //     img: 'https://ua.igotoworld.com/frontend/webcontent/websites/1/images/10070_800x600_articleimages_1499_d.jpg'
        // });


        // Excursion.create({
        //     id: 5,
        //     name: 'Андреевский спуск – киевский Монмартр',
        //     allType: [{types: 'Одноденна'}, {types: 'Пішохідна прогулянка'}],
        //     prise: 1500,
        //     date: new Date(2020, 7, 13),
        //     freeSits: 15,
        //     img: 'http://dinaitour.com/wp-content/uploads/2015/12/28524-0-640x425.jpg'
        // });
        //
        // Excursion.create({
        //     id: 6,
        //     name: 'Город-герой Киев (с Музеем ВОВ)',
        //     allType: [{types: 'Одноденна'}, {types: 'Автобус'}, {types: 'Для жителів інших міст'}],
        //     prise: 3100,
        //     date: new Date(2020, 6, 1),
        //     freeSits: 45,
        //     img: 'https://rpa-mu.ru/Media/Default/fotoreportazhi/kiev-dnepr.jpg'
        // });
        //
        // Excursion.create({
        //     id: 7,
        //     name: 'Днепровские волны',
        //     allType: [ {types: 'Теплохід'},
        //         {types: 'Для жителів інших міст'}, {types: 'Сімейна'}],
        //     prise: 3100,
        //     date: new Date(2020, 9, 7),
        //     freeSits: 30,
        //     img: 'https://i.lb.ua/016/22/5c9a968edc5c0.jpeg'
        // });

        // Excursion.create({
        //     id: 8,
        //     name: '20000 лье под землей',
        //     allType: [{types: 'Одноденна'}, {types: 'Екстримальна'}],
        //     prise: 666,
        //     date: new Date(2020, 6, 13),
        //     freeSits: 10,
        //     img: 'https://tudoy-sudoy.od.ua/wp-content/uploads/2017/05/odessa_katakombs_5-768x513.jpg'
        // });
        //
        // Excursion.create({
        //     id: 9,
        //     name: 'Мимо тёщиного дома',
        //     allType: [ {types: 'Теплохід'},
        //         {types: 'Для жителів інших міст'}, {types: 'Екстримальна'}],
        //     prise: 420,
        //     date: new Date(2020, 8, 8),
        //     freeSits: 15,
        //     img: 'https://tudoy-sudoy.od.ua/wp-content/uploads/2017/04/krimenal-naya-odessa2.jpg'
        // });


        let excursion = await Excursion.find({});
        res.send(excursion)

    })();

});

router.get('/:id', (req, res)=>{


    (async () => {



        let excursion = await Excursion.findOne({id: req.params.id});
        res.send(excursion)

    })();

});


module.exports = router;
