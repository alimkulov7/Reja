console.log("Web Serverni boshlash!");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:",err);
    } else {
        user = JSON.parse(data);
    }
});

//MongoDb calling

const db = require("./server").db();

//1 ENTRY code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//2 SESSION code 

//3 VIEWS code
app.set("views", "views");
app.set("view engine", "ejs");

//4 ROUTING CODE
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/", function (req,res) {
    res.render("reja");
});
app.get("/author", (req, res) => {
    res.render("author",{user: user });
});

module.exports=app;

