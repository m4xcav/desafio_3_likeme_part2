const db = require('../database/dbindex');
const { deletePost, verifyPost} = require('../database/querys/queryindex');

const deletePosts = async (req, res) => {
    const id = Number(req.params.id);
    console.log("El id que llega a deletePosts es: " + id);

    // Validar si el ID está definido
    if (id === undefined || id === null || isNaN(id)) {
        return res.status(400).json({
            msg: 'Invalid or missing ID',
        });
    }

    try {
        const { rowCount, rows } = await db.query(verifyPost, [id]);

        if (rowCount > 0) {
            // Si hay filas, el post existe
            const { rowCount: rowCount2, rows: rows2 } = await db.query(deletePost, [id]);

            if (rowCount2 > 0) {
                // el delete fue exitoso
                res.status(200).json({
                    msg: 'Post delete successful',
                    dataCount: rowCount2,
                    data: rows2,
                });
            } else {
                // el delete no tuvo éxito
                res.status(200).json({
                    msg: 'No data found for delete',
                });
            }
        } else {
            // No se encontraron datos para el post
            res.status(200).json({
                msg: 'No data found for post',
            });
        }
    } catch (error) {
        console.error("Error en deletePosts:", error);
        res.status(500).json({
            status: 'Internal Server Error',
            msg: error.message || 'Unexpected error occurred',
        });
    }
};
module.exports = {
	deletePosts,
};
