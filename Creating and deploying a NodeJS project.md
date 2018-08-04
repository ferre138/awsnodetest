# Create Node.js application
1. Go to or create the directory where the project will be saved
1. Start npm - `npm start`
1. Give the information you want, everything can be skipped besides author and entry point, add your name to author and app.js as entry point.
1. Add dependencies (most common are express, ejs, body-parser)
   1. For devDependencies - `npm install module-example --save-dev`
   1. For dependencies -`npm install module-example --save-prod`
1. Create app.js - `nano app.js` or `touch app.js`
1. Write sample nodejs application to app.js:
```javascript
var express	= require('express'),
app             = express(),
bodyParser	= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function(req, res){
        res.send('HEY!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
7. Run nodejs application - `node app.js`

# Kill Node.js application
To stop the app - `killall -9 node`

# Keep your Node.js process running
To keep your server running in the background you need to
1. Install pm2 - `npm i -g pm2` -g for installing globally
1. Use pm2 to start the server - `pm2 start app.js`
1. To list all processes run - `pm2 ls`
1. To rename your process inside of pm2 you need to
1. Use the number index listed in pm2 ls to stop the daemon - `pm2 stop index`
1. Remove it from the list - `pm2 delete index`
1. Start it again, but give it a more meaningful name now - `pm2 start app.js --name “TestApp”`

