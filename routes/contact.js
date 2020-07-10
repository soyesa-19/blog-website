const express = require('express');
const bodyParser = require('body-parser');

var contactRouter = express.Router()


contactRouter.route('/')
.get((req,res)=>{
    res.render('contact',{contactContent:contactContent})
})

module.exports = contactRouter;