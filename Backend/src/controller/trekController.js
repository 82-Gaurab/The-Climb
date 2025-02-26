const Trek = require("../model/trekSchema");


const create = async (req, res) => {

    const request = req.body;
 
    try {

        const data = await Trek.create(request);
          res.status(201).send({ data, message: "successfully created trek" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllTrek = async (req, res) => {
    try{
        const treks = await Trek.findAll();
        res.json(treks);
        
    }catch (error) {
        res.status(400).json({ message: error.message });
    }    
};

const getTrekById = async (req, res) => {
    try {
      const trekId = req.params.id;
      const trek = await Trek.findByPk(trekId);
  
      if (!trek) {
        return res.status(404).send({ message: "Trek not found" });
      }
      const trekData = trek.toJSON();
      res.status(200).send({ data: trekData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to fetch trek" });
    }
  };

  const deleteTrek = async (req, res) => {
    try {
      const trekId = req.params.id;
  
      const result = await Trek.destroy({
        where: { trekId: trekId },
      });
  
      if (result === 0) {
        return res.status(404).send({ message: "Trek not found" });
      }
  
      res.status(200).send({ message: "Trek deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to delete trek" });
    }
  };
  

 module.exports = { create, getAllTrek, getTrekById, deleteTrek };