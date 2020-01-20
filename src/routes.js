const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/dev");

const routes = Router();

// Empty Route
routes.get("/", ( req, res ) => {
    res.status(500).send({ error: 'Route not found !' });
});
routes.post("/devs", async ( req, res ) => {
    const{ github_username, techs } = req.body;

    // Get gitHub Data
    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    let { name = login , avatar_url, bio } = response.data;

    // Techs string to array
    const arr_techs =   techs.split(",").map( tech => tech.trim());

    // console.log( name + ", " + avatar_url + ", " + bio + ", " + techs );
    // create the object we're going to send the mongoose
    const devData = {
        name,
        github_username,
        bio,
        avatar_url,
        techs : arr_techs
    };

    // insert into mongo with Schema's create method from mongoose
    const dev_ret = await Dev.create(devData, function(error) {
        if (error)
            return res.json(error);// next(error);
    });

    return res.json(dev_ret);
});

module.exports = routes;