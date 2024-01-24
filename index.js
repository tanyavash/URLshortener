const express = require("express");
//const mongoose = require('mongoose');
const URL = require('./models/urlmodel');
const urlRoute = require('./routes/urlrouter'); 
const {connectToMongoDB} = require("./connection")

const app = express();
const PORT = 8001;

const connectdb =  connectToMongoDB("mongodb+srv://tanyavashistha11:4h0ye6tGgDumjzyG@cluster0.lj7qkit.mongodb.net/");


app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId",  async (req, res) => {
    const shortId = req.params.shortId;
    const entry =  await URL.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory: {
            timestamp: Date.now()
        },
    },

    });
    res.redirect(entry.redirectURL)
});

app.listen( PORT, ()=> console.log(`server started at: ${PORT}`))
