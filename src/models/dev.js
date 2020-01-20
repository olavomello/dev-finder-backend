const mongoose = require("mongoose");
const pointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    github_username : {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    bio : {
        type: String,
        trim: true
    },
    avatar_url : {
        type: String,
        trim: true
    },
    techs : {
        type: [String],
        trim: true
    },
    location : {
        type: pointSchema,
        index: "2dsphere"
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Dev", DevSchema);