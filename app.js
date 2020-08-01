const express = require("express");
const app = express();
const port = 3000;
const usermodel = require('./models/users');
const connection = require('./config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/loginuser", (req, res) => {
    console.log(req.body)
    usermodel.loginUser(req.body).then(item => {
        res.status(200).send(item[0]);
    })
    .catch(err => {
        res.status(400).send("Unable to save to database");
    });
});

app.listen(port, () => {
    console.log("Server listening on port" + port);
});