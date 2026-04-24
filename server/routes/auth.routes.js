const { registerCompany, readCompany, deleteCompany } = require('../controller/auth.controller.js')

// const { registerCompany } = require('../controller/auth.controller')

const router = require('express').Router()

router
    .post("/registerCompany", registerCompany)
    .get("/readCompany", readCompany)
    .delete("/deleteCompany/:did", deleteCompany)

module.exports = router