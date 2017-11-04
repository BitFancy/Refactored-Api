"use strict";
var Projects = require('./model');

exports.listAll = function (req, res) {
    return Projects.find()
        
};


exports.getProjectById = function (id) {
    return Projects.find({ id: id })[0];
}
