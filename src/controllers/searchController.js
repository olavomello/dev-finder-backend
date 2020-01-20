const Dev = require("../models/dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    // Index
    async index( req, res ){
        const { lat, long, techs } = req.query;

        // Techs string to array
        const arr_techs =   parseStringAsArray(techs);
        
        // Search devs
        const devs = await Dev.find({
            techs : {
                $in : arr_techs
            },
            location : {
                $near:{
                   $geometry:{
                       type: "Point",
                       coordinates : [long, lat]
                   },
                   $maxDistance : 10000
                }
            }
        });

        return res.json({ devs });
    }
};