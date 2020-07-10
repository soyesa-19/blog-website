const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const homeRouter = require('./routes/home');
const composeRouter = require('./routes/compose');
const contactRouter = require('./routes/contact');
const aboutRouter = require('./routes/about');
const UserRouter = require('./routes/users');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blog');
const passport = require('passport')
const path = require('path')

const connect = mongoose.connect('mongodb+srv://soyesa19:test123@blogwebsite.1jpp9.mongodb.net/blogWeb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  })

connect.then((db)=>{
  console.log('Connection with mongoDB Atlas established successfully!')
}, err =>{console.log(err)})

global.homeStartingContent = "Whats on your mind !";
global.aboutContent = "Hey there!! Thanks for visiting this website. I am Suyash, Final year student at OIST, Bhopal. This website is built for practice in field of Web Devlopment. The techology stack used are NodeJs, express, Javascript, html. Hope You like it!";
global.contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))
app.use(passport.initialize());


app.use('/',homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/compose', composeRouter);
app.use('/blog', blogRouter);
app.use('/users', UserRouter);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
