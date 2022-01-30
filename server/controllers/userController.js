const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
class UserController{
    async create(req, res) {
        const {name} = req.body
        const user = await User.create({name})
        return res.json(user)
    }

    async getAll(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }
}

module.exports = new UserController()