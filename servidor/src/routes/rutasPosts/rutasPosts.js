const router = require('express').Router();
const {
	ctrlGetPost,
	ctrlNewPost,
} = require('../../controllers/ctrlindex');
const { getTodoPosts } = ctrlGetPost;
const { crearPosts } = ctrlNewPost;

router.get('/get', getTodoPosts);
router.post('/create', crearPosts);

module.exports = router;