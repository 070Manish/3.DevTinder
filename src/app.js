//Starting point of our  project
//We will start writing code javaScript coode

const express = require("express");
const connectDB = require("./config/database.js");
const app = express();//created web serve
const User = require("./models/user");

//this miidleware help use to convert json object to js object
app.use(express.json());

app.post("/signup", async (req, res) => 
{
    //creating a new instance of the suer model
    const user = new User(req.body);

    try
    {
        await user.save();
        res.send("user added successfully!!");
    }
    catch
    {
        res.status(400).send("error saving the user :" + err.message);
    }
});

//Get user by email - We we see result in postman -> first we have to pass emailid in json formate
app.get("/user", async (req, res) =>
{
    const userEmail = req.body.email;
    try
    {
       const users = await User.find({emailID : userEmail});
       
       if(users.length === 0)
       {
            res.status(404).send("user not found");
       }
       else
       {
        res.send(users);
       }
    }
    catch(err)
    {
        res.status(400).send("Something went wrong");
    }
});

//Feed API - Get/feed - get all the user from the database
app.get("/feed", async (req, res) => 
{
    try
    {
        const users = await User.find({});
        res.send(users);
    }
    catch(err)
    {
        res.status(400).send("Something went wrong");
    }
});












connectDB()
    .then(() => 
    {
        console.log("Database is connectd");
        app.listen(3000, () => 
        {
            console.log("Server is successfully listning on port number 3000...");
        });
    })
    .catch((err) =>
    {
        console.log("database is not conntected!!");
    })










