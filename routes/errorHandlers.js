const express = require("express");
const router = express.Router();

router.use((req,res,next)=>{
    res.status(400).render('notfound');
})

router.use((err,req,res,next)=>{
    if(err.status === 404){
        res.status(404).render('notfound',{err})
    }
    else{
        err.message = err.message || "Oh my, seems there was a problem";
        res.status(err || 500).render('error',{err})
    }

})

module.exports = router;