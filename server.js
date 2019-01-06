'use strict'

//Express server and developer log
const express = require('express');
//Allows mongo access adds schema ability
const mongoose = require('mongoose');
const path = require('path')

//Setup Express & Mongoose
mongoose.Promise = Promise;
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//DB configuration
mongoose.connect('mongodb://localhost/mongoHeadlines', {useNewUrlParser: true});

var db = mongoose.connection;
// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose activated");
});

//Handlebars
const exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', '.hbs')

//Routes
app.use(express.static(path.join(__dirname, '/public')))
var routes = require('./api/routes/routes.js')
app.use('/',routes)

//Spins up server listening
app.listen(process.env.PORT || 3000, function(){
    console.log(`Skynet listening`)
})