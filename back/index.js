const express = require("express");
var cors = require("cors");
// const mysql = require('mysql2');
const app = express();
// const dbconnection = require('./database');
const cookiesession = require("cookie-session");
var session = require("express-session");
const bp = require("body-parser");
const MongoStore = require("connect-mongo");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// const {body, validationResult} = require('express-validator')

// app.use(cors());
app.use(
  cookiesession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 3600 * 1000,
  })
);

// const ifNotLoggedIn =(req,res,next) =>{
//     if(!req.session.ifNotLoggedIn){
//         return res.send('login')
//     }
//     next();
// }

// app.get('/', ifNotLoggedIn,(req,res,next) =>{

// } )

// app.get('/logincheck', (req,res) => {
//     dbconnection.query(
//         'SELECT * FROM users WHERE name = ? AND password = ?'
//     )
//     res.send("sdada");
// })

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://bc:1234@cluster0.wggiglv.mongodb.net/test`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
}
connect();
const corsOptions = { origin: "*" };
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.listen(port, () => console.log(`port : ${port}`));

app.post("/login-check", async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  console.log(req.body);
  let username = req.body.user;
  let password = req.body.pwd;
  console.log("username " + username);
  console.log("password " + password);
  let query = await client
    .db("login")
    .collection("users")
    .findOne({ username : username });
  console.log(query);
  if (query == null) {
    let obj = {
      success: false,
    };
    res.send(obj);
  } else {
    if (password == query.password) {
      let a = query.artical;
      let f = query.firstname;
      let l = query.lastname;
      let obj = {
        artical: a,
        firstname: f,
        lastname: l,
        success: true,
      };
      res.send(obj);
    } else {
      let obj = {
        success: false,
      };
      res.send(obj);
    }
  }
});
