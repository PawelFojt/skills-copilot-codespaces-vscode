//create web server
var app = express();
// //add middleware
app.use(express.static(__dirname + '/public'));
// //add route
app.get('/comments.json', function(req, res){
  res.json(comments);
});
// //start the server
app.listen(3000);
// //log
console.log('Server started: http://localhost:3000/');
// With the snippet from app.js:
// //create web server
var app = express();
// //add middleware
app.use(express.static(__dirname + '/public'));
// //add route
app.get('/comments.json', function(req, res){
  res.json(comments);
});
// //start the server
app.listen(3000);
// //log
console.log('Server started: http://localhost:3000/');
// The only difference is that now we have a route to handle requests to /comments.json. We can add additional routes as well:
// //add route
app.get('/contacts.json', function(req, res){
  res.json(contacts);
});
// //add route
app.get('/products.json', function(req, res){
  res.json(products);
});
// Now we have a server that can serve up three different JSON endpoints. We can run the server with node app.js and then test our endpoints using curl:
// $ curl http://localhost:3000/comments.json
// [{"name":"Pete Hunt","comment":"This is one comment"},{"name":"Jordan Walke","comment":"This is *another* comment"}]
// $ curl http://localhost:3000/contacts.json
// [{"name":"Pete Hunt","email":"

