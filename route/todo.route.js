const route = require("express").Router()
const { getAllTodos, addTodo } = require("./../controller/todo.controller")

route
    .get("/get", getAllTodos)
    .post("/add", addTodo)
module.exports = route