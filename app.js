const express = require("express");
const app = express();
const port = 8082;
const usermodel = require('./models/users');
const connection = require('./config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/loginuser", (req, res) => {
    console.log(req.body)
    usermodel.loginuser(req.body).then(item => {
        if(item) {
			res.status(200).send(item);
		}
		else {
			res.status(400).send()
		}
    })
    .catch(err => {
        res.status(400).send("Unable to save to database");
    });
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
