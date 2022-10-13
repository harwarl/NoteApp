const express = require('express');

const router = express.Router();

const noteController = require('../controller/note');

router.post('/delete-note', noteController.postDeleteNote);

router.get('/edit-note/:noteId', noteController.getEditNote);

router.post('/edit-note', noteController.postEditNote);

router.get('/my-notes/:noteId', noteController.getNote);

router.post("/add-note", noteController.postAddNote);

router.get('/new-note', noteController.getNewNote);

router.get('/my-notes', noteController.getNotes);

router.get('/about-us', noteController.getAboutUs);

router.get('/', noteController.getHome);

module.exports = router;