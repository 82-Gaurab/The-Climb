const {days,trek} = require('../model/associations')

const create = async (req, res) => {

    const request = req.body;
 
    try {

        const data = await trek.create(request);
          res.status(201).send({ data, message: "successfully created trek" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllTrek = async (req, res) => {
    try{
        const treks = await trek.findAll();
        res.json(treks);
        
    }catch (error) {
        res.status(400).json({ message: error.message });
    }

    
};

 module.exports = { create, getAllTrek };