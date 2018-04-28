// // Your server.js file should require the basic npm packages we've used in class:
// express, body-parser and path.
var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var serveStatic=require('serve-static');

var app=express();
var PORT=process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use('/assets', express.static('assets'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
