const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        evento: "aaaa",
        aluno: "eu"
    });
});

app.listen(3333, () => {
    console.log("Server is Running on Port 3333!");
});