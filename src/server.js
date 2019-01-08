var path = require("path");
var express = require("express");
//require('./simple.js');

var PORT = 3000;
var app = express();

//Serving the files on the dist folder


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'tpls'));

app.use(express.static('dist'));

const bodyData = 'Application Running on '+PORT+'...';

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('index');
// })
//res.render('index',{body:body, title:title});

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.render('index',{body:bodyData});
});

console.log('Server is running at -----------> ',PORT);
app.listen(PORT);




//----------------------------------------------------------

// const path = require('path')
// const express = require('express')
// const app = express(),
//             DIST_DIR = __dirname,
//             HTML_FILE = path.join(DIST_DIR, 'index.html')
// app.use(express.static(DIST_DIR))
// app.get('*', (req, res) => {
//     res.sendFile(HTML_FILE)
// })
// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => {
//     console.log(`App listening to ${PORT}....`)
//     console.log('Press Ctrl+C to quit.')
// })

//----------------------------------------------------------