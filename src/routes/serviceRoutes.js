const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.listar);

router.post("/", serviceController.criar);

router.put("/:id", serviceController.atualizar);

router.delete("/:id", serviceController.excluir);

module.exports = router;