const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.json())
app.use(cors({origin:true}))


app.use("/api/msg", require("./route/todo.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})


app.use((error, req, res, next) => {
    console.error("Unhandled error:", error);
    res.status(500).json({ message: error.message || "Something Went Wrong" });
});


mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
    console.log("MONGO CONNECTED")

})
