//Create web server
//npm install express
//npm install body-parser
//npm install cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const comments = require('./comments.json');

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment
    };

    comments.push(comment);
    res.send(comment);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));