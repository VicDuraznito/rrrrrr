const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.get('/logout', LoginController.logout);
router.get('/credito', LoginController.credito);
router.post('/loan-estimate', LoginController.loanEstimate);

router.get('/admin', LoginController.admin);
router.post('/admin', LoginController.admin);

//router.get('/admin', LoginController.puta);
//router.post('/admin', LoginController.puta);



module.exports = router;