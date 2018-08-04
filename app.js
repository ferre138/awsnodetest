var express	= require('express'),
    app 	= express(),
    bodyParser	= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function(req, res){ 
	res.send('HEY! YOU THERE!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
