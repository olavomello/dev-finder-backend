const mongoose = require("mongoose");
const { Schema } = mongoose;


const DevSchema = new Schema({
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
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Dev", DevSchema);