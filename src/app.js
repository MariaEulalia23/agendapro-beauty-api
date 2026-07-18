const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const professionalRoutes = require("./routes/professionalRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/profissionais", professionalRoutes);

module.exports = app;