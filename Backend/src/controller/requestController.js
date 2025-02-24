const request = require("../model/requestSchema");

const create = async (req, res) => {
  try {
    const body = req.body;
    console.log(req.body);

    if (!body?.name || !body?.email || !body?.phone) {
      return res.status(500).send({ message: "Invalid" });
    }

    const requests = await request.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      noOfPeople: body.noOfPeople,
      message: body.message,
      trekId: body.trekId,	
    });
    res.status(201).send({ data: requests, message: "successfully created request" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch request" });
  }
};

const getRequestById = async (req, res) => {
    try {
      const requestId = req.params.id;
      const request = await request.findByPk(requestId);
  
      if (!request) {
        return res.status(404).send({ message: "request not found" });
      }
      const requestData = request.toJSON();
      res.status(200).send({ data: requestData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to fetch request" });
    }
  };

  const getAllRequests = async (req, res) => {
    try {
      const requests = await request.findAll();
      res.status(200).send({ data: requests });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "failed to fetch requests" });
    }
  };

 module.exports = { create, getAllRequests, getRequestById };