//create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//set port
app.set('port', (process.env.PORT || 5000));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set route
app.post('/comment', function (req, res) {
    console.log(req.body);
    res.send('post request to homepage');
});

//start server
app.listen(app.get('port'), function () {
    console.log('Server started on port ' + app.get('port'));
});

