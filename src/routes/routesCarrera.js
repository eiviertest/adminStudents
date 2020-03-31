const { Router } = require("express");
const router = Router();

const {
    listarCarreras
} = require("../controllers/controllerCarrera");

router.get('/', listarCarreras);

module.exports = router;