const db = require('../database/dbindex');
const { createNewPost } = require('../database/querys/queryindex');

const crearPosts = async (req, res) => {
	try {
		switch (true) {
			case !req.body:
				res.status(400).json({
					status: 'Bad request',
					msg: 'Body is required',
				});
				break;

			case !req.body.titulo || !req.body.url || !req.body.descripcion:
				res.status(400).json({
					status: 'Bad request',
					msg: 'All fields are required',
				});
				break;

			default:
				const { titulo, url, descripcion } = req.body;
				const values = [titulo, url, descripcion];

				const { rowCount, rows } = await db.query(createNewPost, values);

				if (rowCount) {
					res.status(200).json({
						msg: 'Post created success!!',
						dataCount: rowCount,
						data: rows,
					});
				} else {
					res.status(400).json({
						msg: 'Post is not created',
					});
				}
				break;
		}
	} catch (error) {
		res.status(400).json({
			status: 'Bad request',
			msg: error,
		});
	}
};


module.exports = {
	crearPosts,
};