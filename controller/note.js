const Note = require('../models/note');

exports.getHome = (req, res, next) =>{
    Note.findAll()
    .then(notes=>{
        res.render('home', {
            pageTitle: "Home",
            notes: notes
        })
    })
    .catch(err=>console.log(err))
}

exports.getNotes = (req, res, next) =>{
    Note.findAll()
    .then(notes=>{
        res.render('noteList', {
            pageTitle: "My Notes",
            notes: notes
        })
    })
    .catch(err=>console.log(err))
}

exports.getAboutUs = (req, res, next)=>{
    res.render('aboutus', {
        pageTitle: "About Us"
    })
}

exports.getNewNote = (req, res, next) =>{
    res.render('new-note', {
        pageTitle: "New Note",
        editing : false
    })
}

exports.postAddNote = (req, res, next) =>{
    const title = req.body.title;
    const note = req.body.note;
    req.user
        .createNote({title: title, note: note})
        .then(note=>{
            console.log("NOTE ADDED TO DB...");
        })
        .catch(err=>console.log(err));
    res.redirect('/my-notes');
}

exports.getNote = (req, res, next) =>{
    const noteId = req.params.noteId;
    Note.findByPk(noteId)
    .then(note=>{
        res.render('note-view',{
            pageTitle : note.title,
            note: note
        })
    })
    .catch(err=>{console.log(err)})
}


exports.getEditNote = (req, res, next) =>{
    editing = req.query.edit;
    const noteId = req.params.noteId;
    if(!editing){
        res.redirect('/');
    }
    Note.findByPk(noteId)
    .then(note=>{
        res.render('new-note', {
            pageTitle: "Edit Note",
            editing : editing,
            note: note
        })
    })
    .catch(err=>console.log(err))
}

exports.postEditNote = (req, res, next) =>{
    const updatedTitle = req.body.title;
    const updatedNote = req.body.note;
    const noteId = req.body.noteId;
    Note.findByPk(noteId)
        .then(note=>{
            note.title = updatedTitle;
            note.note = updatedNote;
            console.log("Updating Note...");
            return note.save();
        })
        .then(note=>{
            console.log("Note Updated...");
            res.redirect('/my-notes')
        })
        .catch(err=>console.log(err));
}

exports.postDeleteNote = (req, res, next) =>{
    const noteId = req.body.noteId;
    console.log(noteId);
    Note.findByPk(noteId)
        .then(note=>{
            return note.destroy();
        })
        .then(result =>{
            console.log("Note Deleted...");
            res.redirect('/my-notes');
        })
        .catch(err=>console.log(err))
}