var express = require("express");
var app = express();
app.use("/dojo", express.static("dojo1App"));

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});
