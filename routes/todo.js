const express = require('express');
const router = express.Router();
const {
    getAllTodos, 
    getTodoById, 
    createTodo, 
    deleteTodo, 
    editTodo
} = require('../controllers/todo');

router    
    .get("/todo", getAllTodos) // get all todos    
    .get("/todo/:id", getTodoById) // get single todo by id    
    .post("/todo", createTodo) // post new todo    
    .delete("/todo/:id", deleteTodo) // delete    
    .put("/todo", editTodo); // edit a todo

module.exports = router;