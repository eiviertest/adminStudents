const { Router } = require("express");
const router = Router();

const {
    recordMark
} = require("../controllers/controllerMark");

router.get('/', recordMark);

module.exports = router;