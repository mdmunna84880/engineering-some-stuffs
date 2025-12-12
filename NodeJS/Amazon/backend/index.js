/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

(async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    console.log("Local DB is connected...");
  } catch (err) {
    console.log("Server is not connected", err);
    process.exit(1);
  }
})();

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
  },
  stockCount: {
    type: Number,
    max:1000
  },
  images: {type: String}
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/products", async (req, res) => {
    console.log(req.body);
  try{
    const newProduct = await Product.create(req.body);
   res.send(newProduct)
  }
  catch(err){
    console.log(err)
    res.status(500).send("Sever error");
  }
});

app.get("/products", async (req, res)=>{
    try{
        const allProducts = await Product.find();
        console.log(allProducts);
        res.send(allProducts)
    }catch(err){
        console.log("Error occured", err);
    }
})

app.get("/products/:name", async (req, res)=>{
    try{
        const allProducts = await Product.find({name: req.params.name});
        console.log(allProducts);
        res.send(allProducts)
    }catch(err){
        console.log("Error occured", err);
    }
});

app.patch("/products/:name", async(req, res)=>{
    try{
        const allProducts = await Product.updateOne({name: req.params.name}, {$set:req.body});
        console.log(allProducts);
        res.send(allProducts)
    }catch(err){
        console.log("Error occured", err);
    }
})

app.put("/products/:name", async(req, res)=>{
    try{
        const allProducts = await Product.updateOne({name: req.params.name}, {$set:req.body});
        console.log(allProducts);
        res.send(allProducts)
    }catch(err){
        console.log("Error occured", err);
    }
})

app.listen(8080, console.log("Server is listening."));
