const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.getAllTodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch Success", result })
})
exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Add Success" })
})
