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
      status: body.status || "Pending", 
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
      const foundRequest  = await request.findByPk(requestId);
  
      if (!foundRequest ) {
        return res.status(404).send({ message: "request not found" });
      }
      const requestData = foundRequest .toJSON();
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

const updateRequestStatus = async (req, res) => {
  try {
    console.log("Request received to update status:", req.params.id, req.body);

    const { id } = req.params;
    const { status } = req.body;

    // Check if request exists
    const existingRequest = await request.findByPk(id);
    if (!existingRequest) {
      console.log("Request not found with ID:", id);
      return res.status(404).json({ message: "Request not found" });
    }

    console.log("Existing request found:", existingRequest);

    // Update status
    existingRequest.status = status;
    await existingRequest.save();

    console.log("Updated request:", existingRequest);

    res.status(200).json({
      message: "Request status updated successfully",
      data: existingRequest,
    });
  } catch (error) {
    console.error("❌ Error updating request status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const requestId = req.params.id;

    const result = await request.destroy({
      where: { requestId: requestId },
    });

    if (result === 0) {
      return res.status(404).send({ message: "Request not found" });
    }

    res.status(200).send({ message: "Request deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete request" });
  }
};


 module.exports = { create, getAllRequests, getRequestById, updateRequestStatus, deleteRequest };