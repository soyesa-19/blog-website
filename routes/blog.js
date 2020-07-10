const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Blogs = require('../models/blog');

const blogRouter = express.Router()

blogRouter.use(bodyParser.json())

blogRouter.route('/:title')
.get((req,res)=>{
    const blogTitle = req.params.title.toLowerCase()

    Blogs.find({})
    .populate('author')
    .then((blogs)=>{
        blogs.forEach(function(blog){
            const check_title = blog.title.toLowerCase()
        
            if (blogTitle === check_title){
              res.render('blog', 
              {
                title:blog.title, 
                content:blog.description, 
                author:blog.author.username,
                email: blog.author.email.toLowerCase()
              })
            }
        
        })
    }, err=>{res.send(err)})
    .catch((err)=>{console.log(err)})
  })

module.exports = blogRouter;