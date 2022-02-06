const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/', userController.create)
router.get('/', userController.getAll)
router.get('/getAll', userController.getAllAll)
router.put('/', userController.delete)
router.put('/change', userController.changeInfo)

module.exports = router