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


app.listen(port, () => console.log(`Listening on port ${port}`));
