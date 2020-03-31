const { Router } = require("express");
const router = Router();

const {
    registrarCalif
} = require("../controllers/controllerCalifs");

router.get('/', registrarCalif);

module.exports = router;