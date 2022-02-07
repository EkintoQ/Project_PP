const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '6h'},
        ''
    )
}

class UserController{
    async login(req, res, next) {
        const {login, password} = req.body
        const user = await User.findOne({
                where: {
                    login: login
                }
            })
        if (!user) {
            return next(ApiError.internal('User with this login does not exist'))
        }
        if (user.isDeleted === true) {
            return next(ApiError.internal('User with this login was deleted'))
        }
        if (password !== user.password) {
            return next(ApiError.internal('Wrong password'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role)
        return res.json({token})
    }

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