const router = require('express').Router();
const {
	ctrlGetPost,
	ctrlNewPost,
	ctrlUpdatePost,
} = require('../../controllers/ctrlindex');
const { getTodoPosts } = ctrlGetPost;
const { crearPosts } = ctrlNewPost;
const {updatePostLike} = ctrlUpdatePost;
router.get('/get', getTodoPosts);
router.post('/create', crearPosts);
router.put('/like/:id', (req, res, next) => {
    const postId = Number(req.params.id);
    updatePostLike(postId, req, res, next);
});

module.exports = router;