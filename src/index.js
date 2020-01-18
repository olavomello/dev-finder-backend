﻿const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

// DB connect
mongoose.connect("mongodb+srv://oministack:nLhaAEUJf6AoUWaO@cluster0-ysld3.gcp.mongodb.net/db?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set global return JSON
app.use(express.json());
app.use(routes);

app.listen(3333);