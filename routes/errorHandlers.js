const express = require("express");
const router = express.Router();

router.use((req,res,next)=>{
    const err = new Error("not found")
    err.status = 400;
    next(err)
})

router.use((err,req,res,next)=>{
    res.locals.err = err;
    res.locals.message = err.message
    res.status(err.status);
    res.send(err.message);

})

module.exports = router;