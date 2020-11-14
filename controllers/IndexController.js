'use strict'

class IndexController {

  mensaje = (req, res) => {
    console.log('>>','IndexController','mensaje')
    res.render('index');
  }

}

module.exports = IndexController;
