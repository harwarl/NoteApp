const express = require('express');

const router = express.Router();

const noteController = require('../controller/note');

router.post("/add-note", noteController.postAddNote);

router.get('/new-note', noteController.getNewNote);

router.get('/my-notes', noteController.getNotes);

router.get('/about-us', noteController.getAboutUs);

router.get('/', noteController.getHome);

module.exports = router;