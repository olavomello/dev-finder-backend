const { Router } = require("express");
const routes = Router();
const devController = require("./controllers/devControllers");
const searchControler = require("./controllers/searchController");

// Empty Route
routes.get("/", ( req, res ) => {
    res.status(500).send({ error: 'Route not found !' });
});
// Get Dev
routes.get("/devs", devController.index );
// Add Dev
routes.post("/devs", devController.store );
// Search Dev
routes.get("/search", searchControler.index );

module.exports = routes;