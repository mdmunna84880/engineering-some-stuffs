const express = require("express");
const app = express();
const task = require("./routes/tasks");
const mongoose = require("mongoose");
require('dotenv').config()
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

const uri = process.env.MONGO_URI;

(async function() {
    try{
        await mongoose.connect(uri);
        console.log("Connected to DB...");
    }catch(err){
        console.error("Fail to connect to server, Try after sometime!", err);
    }
})();


app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", task);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Server is listening on ${port}`));