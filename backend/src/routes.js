const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({
        evento: "aaaa",
        aluno: "eu"
    });
});

module.exports = routes;