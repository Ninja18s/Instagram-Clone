const router = require('express').Router();

const multer = require('multer');

const addNewPost = require('../controller/post/newPost');
const authmiddleware = require('../middleware/authMiddleware');
const deleteImage = require('../controller/post/deletePostByPostid');
const getAllImages =  require('../controller/post/viewAllPostsByUsername');
const hitLike = require('../controller/post/likes/hitLike');
const viewTotalLikes = require('../controller/post/likes/viewTotalLikes');
const deleteLike = require('../controller/post/likes/removeLike');
const newComment = require('../controller/post/comment/newComment');
const viewAllCommentsOnPost = require('../controller/post/comment/viewAllComments');
const deleteCommentOnPost = require('../controller/post/comment/deleteCommentOnPost');








router.post('/addPost',authmiddleware,multer().single('image'),addNewPost);

router.delete('/deletePost', authmiddleware,multer().none(), deleteImage);
router.get('/getPosts', authmiddleware, getAllImages );

router.post('/hitLike', authmiddleware, hitLike);
router.get('/showLikes',authmiddleware,multer().none(), viewTotalLikes);
router.delete('/deleteLike', authmiddleware, multer().none(), deleteLike);



router.post('/newComment', authmiddleware, newComment);
router.get('/allComment', authmiddleware, viewAllCommentsOnPost);
router.delete('/deleteComment', authmiddleware, deleteCommentOnPost);


module.exports = router;