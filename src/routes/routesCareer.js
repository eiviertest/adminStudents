const { Router } = require("express");
const router = Router();

const {
    listCareers
} = require("../controllers/controllerCareer");

router.get('/', listCareers);

module.exports = router;