const { trekRequest } = require("../model/associations");

const create = async (req, res) => {
    const requestData = req.body; // Avoid variable name conflict
 
    try {
        const data = await trekRequest.create(requestData); // Use model reference correctly
        res.status(201).send({ data, message: "Successfully created request" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllRequests = async (req, res) => {
    try {
        const trekRequests = await trekRequest.findAll();
        res.json(trekRequests);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }    
};

const getRequestById = async (req, res) => {
    try {
        const requestId = req.params.id;
        const request = await trekRequest.findByPk(requestId);

        if (!request) {
            return res.status(404).send({ message: "Request not found" });
        }
        res.status(200).send({ data: request.toJSON() });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch request" });
    }
};

module.exports = { create, getAllRequests, getRequestById };
