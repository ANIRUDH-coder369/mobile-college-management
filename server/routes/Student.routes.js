const { REGISTER_student_tpo, studentLogin, READ_tpo, updateTpo, deleteTpo } = require('../controller/studentlogin.controller.js')


const router = require('express').Router()

router
    .post('/registerTpo', REGISTER_student_tpo)
    .post("/studentLogin", studentLogin)
    .get("/readTpo", READ_tpo)
    .put("/updateTpo/:uid", updateTpo)
    .delete("/deleteTpo/:uid", deleteTpo)

module.exports = router