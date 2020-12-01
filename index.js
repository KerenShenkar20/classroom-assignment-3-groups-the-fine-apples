const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({response: "index route"}));
app.post('/addLanguage',(req,res)=>{res.status(200).send("language added, let's go best team")})
/*  Every team member has to add a route to this file, like the one above
    For example: 
    Student A writes the route for GET /playlist
    and student B writes the route for PUT /language */

app.get('/playlist/:id', ((req, res) => {
    res.json({response: "specific playlist by id"})
}));

app.get('/list', (req, res) => {
    res.json({response: "this is a list of objects"})
});
app.put('/list/:songName', (req, res) => {
    res.status(200).json({response: `Update - the song name is ${req.body.songName}`});
});

app.all('*',(req, res) => {
    res.status(404).json({"Error": "Page not found"})
});



app.listen(port, () => console.log(`Listening on port ${port}`));
