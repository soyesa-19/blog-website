const express = require('express');
const bodyParser = require('body-parser');

var aboutRouter = express.Router()


aboutRouter.route('/')
.get((req,res)=>{
    res.render('about', {aboutContent:aboutContent})
})

module.exports = aboutRouter;