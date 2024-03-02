import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
var email = "";
var emailCap = {};

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

function emailReg(req, res, next){
    email = req.body.email;
    emailCap = {
        email : email
    };
    next();
}

app.use(emailReg);

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    res.render("index.ejs", emailCap);
});

app.listen(port, () => {
    console.log("Listening on Port: " + port);
});