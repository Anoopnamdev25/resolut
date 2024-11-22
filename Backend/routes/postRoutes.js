const express = require('express');
const { createPost, getPosts, updatePost, deletePost, getPostsById } = require('../controllers/postController');
const upload = require('../middleware/multerConfig');

const router = express.Router();

router.get('/', getPosts);
router.post('/', upload.single('image'), createPost);
router.get('/:id', upload.single('image'), getPostsById);
router.put('/:id', upload.single('image'), updatePost);
router.delete('/:id', deletePost);

module.exports = router;
