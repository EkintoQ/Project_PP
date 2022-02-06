const {User} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserController{
    async create(req, res) {
        const {name, surname, dateOfBirth, role, login, password, isDeleted} = req.body
        const users = await User.create({name, surname, dateOfBirth, role, login, password, isDeleted})
        return res.json(users)
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let users
        users = await User.findAndCountAll({
            limit,
            offset,
            where: {
                isDeleted: false
                }
        })
        return res.json(users)
    }

    async getAllAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let users
        users = await User.findAndCountAll({})
        return res.json(users)
    }

    async delete(req, res) {
        const {id} = req.body
        let users
        users = await User.findOne({
            where: {
                id: id
            }
        })
        users.isDeleted = true
        await users.save()
        return res.json(users)
    }

    async changeInfo(req, res) {
        const {id, name, surname, dateOfBirth, role, login, password, isDeleted} = req.body
        let users
        users = await User.findOne({
            where: {
                id: id
            }
        })
        users.name = name
        users.surname = surname
        users.dateOfBirth = dateOfBirth
        users.role = role
        users.login = login
        users.password = password
        users.isDeleted = isDeleted
        await users.save()
        return res.json(users)
    }
}


module.exports = new UserController()