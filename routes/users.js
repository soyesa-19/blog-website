const express =  require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const User = require('../models/user');
const router = express.Router()
const authenticate = require('../authenticate');

router.use(bodyParser.json())

router.get('/', (req, res, next)=>{
    res.send("Helloo sexy")
})

router.get('/signup', (req,res,next)=>{
    res.render('signUp')
});

router.post('/signup', (req, res, next) => {
    User.register(new User({email:req.body.email,username: req.body.username}), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          // var token = authenticate.getToken({_id: req.user._id});
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true,status: 'Registration Successful!'});
        });
      }
    });
  });

  router.get('/signin', (req,res,next)=>{
      res.render('signin')
  })

  router.post('/signIn',passport.authenticate('local'), (req,res,next)=>{
    var token = authenticate.getToken({_id: req.user._id});
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true,token:token, status: 'You are successfully logged in!'});
    // res.redirect({success: true,token:token, status: 'You are successfully logged in!'},'/')
    
  })

module.exports = router;