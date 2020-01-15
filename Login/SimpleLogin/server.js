let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let path = require('path');

app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require('fs');

app.get('/users',(req, res)=>{
	res.send("You came here after login");
})

app.get('/public/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/script.js'));
});
app.get('/public/styles.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/styles.css'));
});


app.listen(5000, function(){
	console.log('server running at port 5000');
})