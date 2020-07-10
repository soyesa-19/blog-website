const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Blogs = require('../models/blog');
const authenticate = require('../authenticate')

var composeRouter = express.Router()
composeRouter.use(bodyParser.json())

composeRouter.route('/')
.get((req,res)=>{
    res.render('compose')
})
.post(authenticate.verifyUser,(req,res,next) => {
   
    req.body.author = req.user._id
    console.log(req.body)
    Blogs.create(req.body)
    .then((blog)=>{
        res.statusCode = 200
        res.sendStatus(200)
        // res.redirect('http://localhost:3000')
        // res.sendStatus(200)
    }, err=>{req.setEncoding(err)})
    .catch((err)=>{res.send(err)})  
})

module.exports = composeRouter;