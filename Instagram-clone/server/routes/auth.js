const router = require('express').Router();
const multer = require('multer');

const handleLogin = require('../controller/auth/handleLogin');
const handleRegister = require('../controller/auth/handleRegister');
const deleteAccount = require('../controller/auth/deactivateAccount');
const authmiddleware = require('../middleware/authMiddleware');





router.post('/register',handleRegister);
router.post('/login',handleLogin);
router.delete('/deactivate', authmiddleware ,multer().single(), deleteAccount);



module.exports = router;