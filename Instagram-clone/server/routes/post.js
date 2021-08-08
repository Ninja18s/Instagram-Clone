const router = require('express').Router();
const multer = require('multer');

const addNewPost = require('../controller/post/newPost');
const authmiddleware = require('../middleware/authMiddleware');







router.post('/post',authmiddleware,multer().none(),addNewPost);



module.exports = router;