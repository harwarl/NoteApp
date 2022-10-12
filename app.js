const express = require('express');
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//setting view
app.set("view engine", "ejs");
app.set("views", "views");
// registering routes
app.get('/ome', (req, res, next)=>{
    res.render("index", {
        pageTitle: "Home-NoteApp"
    });
})

app.get('/my-notes', (req, res, next)=>{
    res.render("notes", {
        pageTitle: "My Notes"
    });
})

app.get('/about-us', (req, res, next)=>{
    res.render("aboutus", {
        pageTitle: "About Us"
    });
})

app.get('/', (req, res, next)=>{
    res.redirect('/home');
})

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is running on Port: ", PORT);
});