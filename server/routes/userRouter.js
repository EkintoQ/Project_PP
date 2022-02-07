const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const role = require('../middleware/roleMiddleware')

router.post('/', role('ADMIN'), userController.create)
router.post('/login', userController.login)
router.get('/', userController.getAll)
router.get('/getAll', userController.getAllAll)
router.get('/auth', authMiddleware, userController.check)
router.put('/', role('ADMIN'), userController.delete)
router.put('/change', role('ADMIN'), userController.changeInfo)


module.exports = router