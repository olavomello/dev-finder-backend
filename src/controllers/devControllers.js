const axios = require("axios");
const Dev = require("../models/dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {

    // Index
    async index( req, res ){
        const devs = await Dev.find();
        return res.json(devs);
    },

    // Show

    // Update

    // Destroy / Delete

    // Store
    async store( req, res ){
        const{ github_username, techs, lat, long } = req.body;
    
        // Find duplicate users
        let dev_ret = await Dev.findOne({github_username});  
        if( !dev_ret ){
            // Get gitHub Data
            const response = await axios.get(`https://api.github.com/users/${github_username}`);
            let { name = login , avatar_url, bio } = response.data;
        
            // Techs string to array
            const arr_techs =   parseStringAsArray(techs);
        
            // Location
            const location = {
                type: "Point",
                coordinates: [long,lat]
            };
            
            // create the object we're going to send the mongoose
            const devData = {
                name,
                github_username,
                bio,
                avatar_url,
                techs : arr_techs,
                location
            };

            // insert into mongo with Schema's create method from mongoose
            dev_ret = await Dev.create(devData);
        
        }
        return res.json(dev_ret);
    }
};