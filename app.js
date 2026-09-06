console.log("Web Serverni boshlash!");
const express = require("express");
const app = express();
const mongodb = require("mongodb");
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
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
      
     res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({state: "success" });
        }
    );
});


app.get("/", function (req,res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("Something went wrong");
        }
        else {
            
            res.render("reja", { items: data});
        }
    })
  
});
app.get("/author", (req, res) => {
    res.render("author",{user: user });
});

module.exports=app;