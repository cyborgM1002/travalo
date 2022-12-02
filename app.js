const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const { Server } = require("http");
const port = process.env.port || 8000;
// const bootstrap = require('bootstrap');
// import bootstrap from 'bootstrap'


// setting path
const staticPath = path.join(__dirname, "public");
const ejsPath = path.join(__dirname, "views");
// const imges = path.join(__dirname, "img");


// middlewares
app.use(express.static(staticPath));
app.set("view engine", "ejs");
app.set("views", ejsPath);
// app.set("img", imges);


//routing




// app.get("/", (req, res) =>{})
app.get("/", (req, res) => {
    res.render("index");
})




// Server
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})