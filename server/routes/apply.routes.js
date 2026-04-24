const { jobRead, jobUpdate, jobDelete, jobPost } = require("../controller/postjobStudent.controller.js")

const router = require("express").Router()


router
    .post("/post", jobPost)
    .get("/read", jobRead)
    .put("/update/:jid", jobUpdate)
    .delete("/delete/:jid", jobDelete)

module.exports = router