const express = require("express");
const userSchema = require("../Models/user");

const router = express.Router();

//Create user
router.post("/users",(req,res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({massege:error}));
});

//Get all users
router.get("/users",(req,res)=>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({massege:error}));
});

//Get a user 
router.get("/users/:id", (req, res)=>{
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({massege:error}));
});

//Delete a user
router.delete("/users/:id", (req, res)=>{
    const {id} = req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({massege:error}));
});

//Update a user
router.put("/users/:id", (req, res)=>{
    const {id} = req.params;
    const {Name, Age, Email} = req.body;
    userSchema
    .updateOne({_id:id},{$set: {Name, Age, Email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({massege:error}));
});

module.exports = router;