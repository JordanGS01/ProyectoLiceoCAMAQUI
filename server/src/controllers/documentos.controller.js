const pool = require('../connection')

const getFiles = async (req, res, next) => {
    try {
        const { idCurso} = req.params;
        console.log(idCurso)
        await pool.query
            (
                "SELECT * FROM documentos WHERE id_grupo=$1",[idCurso]
            ).then((answer) => {
                res.json({
                    status: 'OK',
                    data: answer.rows
                });
            }, (error) => {
                res.json({
                    status: 'Fail',
                    error: error
                });
            });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getFiles
}   