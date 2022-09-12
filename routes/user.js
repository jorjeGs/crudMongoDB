const express = require("express")
const UserModel = require("../models/users")

//router for express
const router = express.Router()

//create user
router.post("/newUser", (req,res)=>{
   const user = UserModel(req.body)
   user.save()
   .then((data)=>res.json(data))
   .catch((error)=> res.json({message: error}))
   
})

//get all users
router.get("/newUser", (req,res)=>{
    UserModel.find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
    
})

//get a user
router.get("/newUser/:id", (req,res)=>{
    const { id } = req.params
    UserModel.findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
    
})

//update user
router.put("/newUser/:id", (req,res)=>{
    const { id } = req.params
    const {nombre, edad, username, password} = req.body

    UserModel.updateOne({_id:id}, { $set: {nombre, edad, username, password}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
    
})

//delete user
router.delete("/newUser/:id", (req,res)=>{
    const { id } = req.params
    UserModel.remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message: error}))
    
})

module.exports = router