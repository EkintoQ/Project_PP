const ApieError = require('../error/ApiError')

module.exports = function (err, req, res, next) {
    if (err instanceof ApieError){
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message:"error didn't expected"})
}