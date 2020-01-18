const { Router } = require("express");
const routes = Router();

// Routes
routes.get("/", ( req, res ) => {
    res.status(500).send({ error: 'Route not found !' });
});
routes.post("/users", ( req, res ) => {
    return res.json({ message : "Hello World !"});
});

module.exports = routes;