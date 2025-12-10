const express = require("express");
const app = express();
const task = require("./routes/tasks");
const mongoose = require("mongoose");
require('dotenv').config()

const uri = process.env.MONGO_URI;
(async function() {
    try{
        await mongoose.connect(uri);
        console.log("Connected to DB...");
    }catch{
        console.error("Fail to connect to server, Try after sometime!");
    }
})();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.use("/api/v1/tasks", task);

app.listen(port, console.log(`Server is listening on ${port}`));