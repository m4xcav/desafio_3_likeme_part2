const selectPosts = `SELECT * FROM posts;`;

const createNewPost = `INSERT INTO posts (titulo, img, descripcion) VALUES
    ($1, $2, $3) RETURNING *`;

module.exports = {
	selectPosts,
	createNewPost,
};