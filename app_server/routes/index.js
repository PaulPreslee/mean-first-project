var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index)

module.exports = router;

/*
var homepageController = function(req, res){
  res.render('index', { title: 'Express' });
};
*/
/* GET home page. *//*
router.get('/', homepageController); 
*/