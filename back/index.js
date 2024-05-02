// import en lugar del requiere
import fs from "fs";
import chalk from "chalk";
//const fs = require('fs');
import express from "express";
import { responseArrayPrecio } from "./basic/beears.js";
import cors from "cors";

const texto = fs.readFileSync("./test.txt", "utf-8");

const app = express();

app.use(cors())

const server = app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
})

app.get("/", (req, res) => {
    console.log("hola jaja");
    return res.send(responseArrayPrecio);
})

console.log(chalk.greenBright(texto));
