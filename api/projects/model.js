var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectsSchema = new Schema({
    customerDetails : { "type" : Object },
    name : { "type" : String },
    description : { "type" : String },
    teamsAssigned : { "type" : Array },
    techStack : { "type" : Array },
    icon : {"type" : String},
    splashScreen : {"type" : String}
});

module.exports = mongoose.model('Projects', projectsSchema, 'Projects');