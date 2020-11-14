'use strict'
const express = require("express");
const router = express.Router();

const SaludosController = require('../controllers/SaludosController');

const saludos = new SaludosController();

router.get("/", saludos.mensaje);
router.get("/:nombre", saludos.hola);

module.exports = router;