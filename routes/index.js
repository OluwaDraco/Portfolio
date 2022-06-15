const express = require("express");
const data = require("../data.json").data;
const projects = data.projects;
const router = express.Router();

router.get('/',(req,res)=>{
    const screenshot = 

    res.render('index');
})

module.exports = router