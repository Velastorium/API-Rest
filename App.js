const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./Routes/user")

//Setting
const app = express();
const port = process.env.PORT || 7000;

//Middlewares
app.use(express.json());
app.use("/api",userRoute);

//Routes
app.get("/",(req, res)=>{
    res.send("Welcomw to my API")
});

//Mongodb connection 
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conected to MongoDB Atlas"))
.catch((error)=> console.error(error));

//Server listening
app.listen(port,() => console.log("Server listening to", port));