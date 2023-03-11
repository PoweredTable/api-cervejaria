const express = require('express');
const router = express.Router();
const controller = require("../controllers/cerveja");

router.get('/nome/:nome', controller.getNome);
router.get('/nacionalidade/:nacionalidade', controller.getNac);
router.get('/tipo/:tipo', controller.getTipo);
router.get('/abv', controller.getAbv);
router.get('/consulta/:nomeP', controller.getNomeP);

module.exports = router;
