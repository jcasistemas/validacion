var express = require('express');
var router = express.Router();

// Version 2 - Importar el controlador
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bienvenido a Quiz !!! <br><h3><span style="color:red;">¿Escapado?</span><h3>' });
});

// Version 2 - Importar el controlador
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
