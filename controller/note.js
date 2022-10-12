const Note = require('../models/note');
exports.getHome = (req, res, next) =>{
    res.render('home', {
        pageTitle: "Home-Note"
    })
}

exports.getNotes = (req, res, next) =>{
    res.render('noteList', {
        pageTitle: "My Notes"
    })
}

exports.getAboutUs = (req, res, next)=>{
    res.render('aboutus', {
        pageTitle: "About Us"
    })
}

exports.getNewNote = (req, res, next) =>{
    res.render('new-note', {
        pageTitle: "New Note"
    })
}

exports.postAddNote = (req, res, next) =>{
    const title = req.body.title;
    const note = req.body.note;
    req.user.createNote({title: title, note: note})
    .then(note=>{
        console.log(note);
    })
    .catch(err=>console.log(err));
    res.redirect('/my-notes');
}