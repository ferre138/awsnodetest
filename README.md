# Go to or create project directory
1. Start npm
`npm start`
2. Give the information you want, everything can be skipped besides author and entry point, add your name to author and app.js as entry point.
3. Add dependencies (most common are express, ejs, body-parser)To devDependencies
`npm install module-example --save-dev`
  * To dependencies
  `npm install module-example --save-prod`
  * Create app.js
  `nano app.js`
  or
  `touch app.js`
4. Write sample nodejs application:
```javascript
var express	= require('express'),
app         	= express(),
bodyParser	= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function(req, res){
        res.send('HEY!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
