const express = require("express");
const router = express.Router();

const professionalController = require("../controllers/professionalController");

router.get("/", professionalController.listar);

router.post("/", professionalController.criar);

module.exports = router;