import express from "express";

const servidor = express();

servidor.get("/", (req, res) => {
    const saudacao = "Bem vindo ao primeiro servidor em Node.js";
    return res.send(saudacao);
});

servidor.listen(3000);