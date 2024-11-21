const express = require("express");
const { handlePostRequest, handleGetRequest } = require("../controllers/bfhlController");

const router = express.Router();

// GET endpoint
router.get("/", handleGetRequest);

// POST endpoint
router.post("/", handlePostRequest);

module.exports = router;
