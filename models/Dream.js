var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//user models
var dreamSchema = new Schema({
    title: String,
    type: String,
    characters: String,
    locations: String,
    events: String
});

var Dream = mongoose.model("Dream", dreamSchema);

module.exports = Dream;
