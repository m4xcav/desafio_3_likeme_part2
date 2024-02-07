const db = require('../database/dbindex');
const { verifyPost, updateLike } = require('../database/querys/queryindex');

const updatePostLike = async (id, req, res) => {
    console.log("El id que llega a updatePostLike es: " + id);

    try {
        const { rowCount, rows } = await db.query(verifyPost, [id]);

        if (rowCount > 0) {
            // Si hay filas, el post existe
            const { rowCount: rowCount2, rows: rows2 } = await db.query(updateLike, [id]);

            if (rowCount2 > 0) {
                // La actualización fue exitosa
                res.status(200).json({
                    msg: 'Post update successful',
                    dataCount: rowCount2,
                    data: rows2,
                });
            } else {
                // La actualización no tuvo éxito
                res.status(200).json({
                    msg: 'No data found for update',
                });
            }
        } else {
            // No se encontraron datos para el post
            res.status(200).json({
                msg: 'No data found for post',
            });
        }
    } catch (error) {
        console.error("Error en updatePostLike:", error);
        res.status(500).json({
            status: 'Internal Server Error',
            msg: error.message || 'Unexpected error occurred',
        });
    }
};

module.exports = {
    updatePostLike,
};
