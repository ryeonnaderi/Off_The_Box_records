const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.listen(PORT,function(){
console.log("app is listening on port " + PORT);
})