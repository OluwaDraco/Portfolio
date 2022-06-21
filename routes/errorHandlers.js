const express = require("express");
const router = express.Router();

router.use((req,res,next)=>{
    const err = new Error();
    err.status = 404;
    err.message= "Sorry, that page doesn't exist"
    console.log(err.status,err.message)
    next(err)
})

router.use((err,req,res,next)=>{
    if(err.status === 404){
        res.status(404).render('notfound',{err})
    }
    else{
        err.status = err.status
        err.message = err.message || "Oh my, seems there was a problem";
        res.status(err || 500).render('error',{err})
        console.log(err.status,err.message)
    }

})

module.exports = router;