const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Blogs = require('../models/blog');

var homeRouter = express.Router()

homeRouter.route('/')
.get((req,res) => {
    Blogs.find({})
    .then((blogs)=>{
        res.render('home', {homeContent:homeStartingContent, blog:blogs})
    }, err=>{res.send(err)})
    .catch((err)=>{console.log(err)}) 
})

module.exports = homeRouter;
