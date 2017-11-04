var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var projectsRepository = require('./repository');


mongoose.Promise = require('bluebird');

router.get('/project/:id/', function (req, res) {
    return  projectsRepository.getProjectById(req.params.id)
        .then((elements) => res.json(elements))
        .catch((err) => res.status(400).send(err.name + " : " + err.message))

})

router.get('/projects', function (req, res) {
    return  projectsRepository.listAll()
    .then((elements) => res.json(elements))
});






module.exports = router;