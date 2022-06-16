const express = require("express");
const {data} = require("../data.json");
const {projects} = data.projects;
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{projects});
})


module.exports = router