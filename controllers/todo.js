const db = require('../models');

exports.getAllTodos = (req, res) => {
    db.Todo.findAll()
        .then(todos => res.send(todos));
}

exports.getTodoById = (req, res) => {
    db.Todo.findAll({ where: {id: req.params.id} })
        .then(todo => res.send(todo));
}

exports.createTodo = (req, res) => {
    db.Todo.create({ text: req.body.text })
        .then(submitedTodo => res.send(submitedTodo));
}

exports.deleteTodo = (req, res) => {
    db.Todo.destroy({where: {id: req.params.id}})
        .then(() => res.send("success"));
}

exports.editTodo = (req, res) => {
    db.Todo.update({text: req.body.text},{where:{id: req.body.id}})
        .then(() => res.send("success"));
}
