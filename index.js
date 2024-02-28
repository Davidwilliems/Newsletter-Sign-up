import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

app.listen(port, () => {
    console.log("Listening on Port: " + port);
});