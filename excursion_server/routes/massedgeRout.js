const express = require('express');
const router = express.Router();
const { Comment } = require("../models/comment");


router.get('/', (req, res)=>{


    (async () => {

        let comments = await Comment.find({});
        console.log(comments);
        res.send(comments)

    })();

});

router.post('/', (req, res)=>{


    (async () => {

        Comment.create({
            name: req.body.name,
            date: new Date(),
            massage: req.body.massage,
            rating: req.body.rating
        });
        res.send(res.body)

    })();

});

module.exports = router;
