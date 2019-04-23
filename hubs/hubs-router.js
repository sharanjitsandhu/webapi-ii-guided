//everything relared to routing is in this file

const express = require("express");

const Hubs = require("./hubs-model.js");

const router = express.Router();

//handles urls brginning with /api/hubs
//replace '/api/hubs' with '/'
//because we are declaring it in the server.js file: server.use("/api/hubs", hubsRouter);

router.get("/", async (req, res) => {
  try {
    const hubs = await Hubs.find(req.query);
    res.status(200).json(hubs);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the hubs"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hub = await Hubs.findById(req.params.id);

    if (hub) {
      res.status(200).json(hub);
    } else {
      res.status(404).json({ message: "Hub not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the hub"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const hub = await Hubs.add(req.body);
    res.status(201).json(hub);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error adding the hub"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await Hubs.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The hub has been nuked" });
    } else {
      res.status(404).json({ message: "The hub could not be found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error removing the hub"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const hub = await Hubs.update(req.params.id, req.body);
    if (hub) {
      res.status(200).json(hub);
    } else {
      res.status(404).json({ message: "The hub could not be found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error updating the hub"
    });
  }
});

//GET api/hubs/123/messages
router.get("/:id/messages", (req, res) => {
  Hubs.findHubMessages(req.params.id)
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
/*
router.get("/:id/messages", async (req, res) => {
  try {
    const messages = await Hubs.findHubMessages(req.params.id);
    if (messages && messages.length > 0) {
      res.status(200).json(messages);
    } else {
      res.status(404).json({ message: "No msgs for this hub." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting the messages for this hub." });
  }
});
*/

module.exports = router;
