const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express)
app.use(express.urlencoded({extended:true}))
const ObjectID = requiere('mongodb').ObjectID

mongoose.connect('mongodb+srv://data:1234@cluster0.qvhok.mongodb.net/AlphaOmega?retryWrites=true&w=majority', {useUnifuedTopology:true, useNewUrlParser:true} )
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function callback () {
    console.log("database is up and running")
})

app.post('/requests', async (req,res) => {
    const userInfo = req.body;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message

    console.log("testing post route");

    try{
        const x = await db.collection("requests").insertOne(userInfo);
        
    } catch (error) {
        console.log(error)
    }

    console.log(userInfo);
    res.json("evaluated successfully")
});

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server is running on port ${port}...`));