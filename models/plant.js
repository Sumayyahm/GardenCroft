const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    plant_name:{type: String, required: true},
    imageurl: {type: String, defaut: ""},
    description: {type: String},
    size: {type: String},
    exposure: {type: String},
    plant_type: {type: String},
    care: {type: String},
    bloom_time: {type: String}
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;