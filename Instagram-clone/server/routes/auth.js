const router = require('express').Router();

const handleLogin = require('../controller/auth/handleLogin');
const handleRegister = require('../controller/auth/handleRegister');






router.post('/register',handleRegister);
router.post('/login',handleLogin);



module.exports = router;