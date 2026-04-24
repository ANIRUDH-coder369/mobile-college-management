const { jobUpdate, jobDelete, jobRead, postjob } = require('../controller/job.controller.js')

const router = require('express').Router()

router
    .post("/jobPost", postjob)
    .get("/jobRead", jobRead)
    .put("/jobUpdate/:jid", jobUpdate)
    .delete("/jobDelete/:jid", jobDelete)

module.exports = router