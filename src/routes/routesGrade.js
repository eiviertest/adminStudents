const { Router } = require("express");
const router = Router();

const {
    recordGrade
} = require("../controllers/controllerGrade");

router.get('/', recordGrade);

module.exports = router;