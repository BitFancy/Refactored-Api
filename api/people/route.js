var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var peopleRepository = require('./repository');


mongoose.Promise = require('bluebird');


router.get('/people/:id/', function (req, res) {
    return peopleRepository.getPersonById(req.params.id)
        .then((elm) => { console.log("elm", elm); return elm })
        .then((elements) => res.json(elements))
        .catch((err) => res.status(400).send(err.name + " : " + err.message))

})

router.get('/people', function (req, res) {
    return peopleRepository.listAll()
        .then((elm) => { console.log("elm", elm); return elm })
        .then((elements) => res.json(elements))
});






module.exports = router;