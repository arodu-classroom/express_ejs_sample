'use strict'

class SaludosController {

  mensaje = (req, res) => {
    console.log('>>','SaludosController','mensaje')
    res.render('index');
  }

  hola = (req, res) => {
    console.log('>>','SaludosController','hola')
    let nombre = req.params.nombre

    res.render('hola', {
      nombre: nombre,
    });

  }

}

module.exports = SaludosController;