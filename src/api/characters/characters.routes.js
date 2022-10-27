const express = require ('express');
// const { modelNames } = require('mongoose');
const Character = require('./characters.model');

const router = express.Router();

router.get('/', async(req, res) => {

    try {
        const allCharacters = await Character.find();
        console.log(allCharacters);
        return res.status(200).json(allCharacters);
    }   catch (error) {
        return res.status(500).json('error en el servidor')
    }
   
});
module.exports = router;