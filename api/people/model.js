var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    firstname : { "type" : String },
    lastname : { "type" : String },
    avatar : { "type" : String },
    roles : { "type" : Array },
    skillset : {"type" : Object}
});

module.exports = mongoose.model('People', peopleSchema, 'People');