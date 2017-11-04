"use strict";
var People = require('./model');

exports.listAll = function (req, res) {
    return People.find()
        
};


exports.getPersonById = function (id) {
    return People.find({ id: id }).then((personArr) => personArr[0]);
}
