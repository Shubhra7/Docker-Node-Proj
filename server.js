const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect(MONGO_URL);
    console.log('Connected successfully to server');

    const db = client.db("apnacollege-db");
    const data = await db.collection('users').find({}).toArray();
    
    client.close();
    res.send(data);
});

//POST new user
// app.post("/addUser", async (req, res) => {
//     const userObj = req.body;
//     console.log(req.body);
//     await client.connect(MONGO_URL);
//     console.log('Connected successfully to server');

//     const db = client.db("apnacollege-db");
//     const data = await db.collection('users').insertOne(userObj);
//     console.log(data);
//     console.log("data inserted in DB");
//     client.close();
// });

// app.post("/addUser", async (req, res) => {
//     const userObj = req.body;
//     console.log(req.body);

//     await client.connect(MONGO_URL);
//     console.log('Connected successfully to server');

//     const db = client.db("apnacollege-db");
//     const data = await db.collection('users').insertOne(userObj);
//     console.log("data inserted in DB");

//     client.close();

//     // Send response
//     res.send(`<h2>User added successfully!</h2><a href="/">Go Back</a>`);
// });

app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);

    await client.connect(MONGO_URL);
    console.log('Connected successfully to server');

    const db = client.db("apnacollege-db");
    await db.collection('users').insertOne(userObj);
    console.log("data inserted in DB");

    client.close();

    console.log("Response submitted");
    
    // ✅ Redirect to homepage
    res.redirect("/");
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});