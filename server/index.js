require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const app = express()

app.use(express.json())
app.use(cors({
    origin: true
}
))
app.use("/api/auth", require("./routes/auth.routes.js"))
app.use("/api/job", require("./routes/jobPost.js"))
app.use("/api/student", require("./routes/Student.routes.js"))
app.use("/api/Apply", require("./routes/apply.routes.js"))

app.use("/api/admin", require("./routes/admin.routes.js"))

mongoose.connection.once("open", () => {
    console.log('db connect');
    app.listen(process.env.PORT, () => {
        console.log('server runing')
    })
})