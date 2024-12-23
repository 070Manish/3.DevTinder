//Starting point of our  project
//We will start writing code javaScript coode

const express = require("express");

const app = express();//created web serve

app.use("/", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/test", (req, res) => {
    res.send("Hello from the test!");
});

app.use("/test1", (req, res) => {
    res.send("Hello from the test1!");
});


app.listen(3000, () => {
    console.log("Server is successfully listning on port number 3000...");
});