const router = require('express').Router();
const {
	ctrlGetPost,
	ctrlNewPost,
	ctrlUpdatePost,
	ctrlDeletePost,
} = require('../../controllers/ctrlindex');
const { getTodoPosts } = ctrlGetPost;
const { crearPosts } = ctrlNewPost;
const {updatePostLike} = ctrlUpdatePost;
const {deletePosts} = ctrlDeletePost;
router.get('/get', getTodoPosts);
router.post('/create', crearPosts);
router.put('/like/:id', (req, res, next) => {
    const postId = Number(req.params.id);
    updatePostLike(postId, req, res, next);
});
router.delete('/:id', deletePosts);
module.exports = router;