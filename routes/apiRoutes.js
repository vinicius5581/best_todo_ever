const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/all", (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
});

module.exports = router;