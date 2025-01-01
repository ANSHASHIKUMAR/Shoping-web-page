const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const signupModel = require('./models/signupUsers')
const prodModel = require('./models/allProds')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users")

app.post("/login", (req, res) => {
    const {name, password} = req.body;
    signupModel.findOne({name: name})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else {
                res.json("password is incorrect")
            }
        }else {
            res.json("username not  existed")
        }
    })
})


app.post('/signup', (req, res) => {
    signupModel.create(req.body)
    .then(signupUsers => res.json(signupUsers))
    .catch(err => res.json(err))
})

app.get("/product", async (req, res) => {
    try {
        const allProds = await prodModel.find({});
        res.status(200).send({ status: "ok", data: allProds });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
});



app.listen(3001, () => {
    console.log("server is running")
})