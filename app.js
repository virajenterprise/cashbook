const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');




//set Routes of App
const app = express();


// parser application  / json
app.set('views',__dirname+'/views');// set express to look in this folder to render our view
app.set('view engine','ejs');// configure template engine
app.use(express.urlencoded({extended:false}));
app.use(express.json());// parse form data client
app.use(express.static(path.join(__dirname,'public')));// configure express to use public folder
app.use(fileUpload()); // configure fileupload

// create database connection
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cashbook'
});
global.conn = conn;

//connect to database
conn.connect((err)=>{
    if(err) throw err;
    console.log('My Sql Connected............');
});

// app get/post/put request here


//Server Listenig
app.listen(3000,()=>{
    console.log('Server Started on port 3000........')
});