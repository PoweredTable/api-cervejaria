const express = require('express');
const router = express.Router();
const controller = require("../controllers/cerveja");

router.get('/nome/:nome', controller.getNome);
router.get('/nome/abreviado/:nome', controller.getNomeAbr);
router.get('/nacionalidade/:nacionalidade', controller.getNac);
router.get('/tipo/:tipo', controller.getTipo);
router.get('/abv', controller.getAbv);

module.exports = router;
