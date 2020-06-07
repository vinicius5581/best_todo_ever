const express = require('express');
const router = express.Router();
const db = require('../models');

// get all todos
router.get("/all", (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
});

// post new todo
router.post("/new", (req, res) => {
    db.Todo.create({
        text: req.body.text
    }).then(submitedTodo => res.send(submitedTodo));
});

module.exports = router;