const express = require("express");

const app = express();

// Routes
app.get("/", ( req, res ) => {
    console.log(req.query);
    return res.json({ message : "Hello World !"});
});

app.listen(3333);