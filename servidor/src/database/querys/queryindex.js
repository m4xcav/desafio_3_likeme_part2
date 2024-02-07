const selectPosts = `SELECT * FROM posts;`;

const createNewPost = `INSERT INTO posts (titulo, img, descripcion) VALUES
    ($1, $2, $3) RETURNING *`;

const verifyPost = `SELECT * FROM posts WHERE id = $1`;
const updateLike = `UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1`;
const deletePost = `DELETE FROM posts WHERE id = $1`;

module.exports = {
	selectPosts,
	createNewPost,
	verifyPost,
	updateLike,
	deletePost,
};