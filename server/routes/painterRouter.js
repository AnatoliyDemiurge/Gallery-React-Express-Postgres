const Router =  require('express')
const router = new Router()
const painterController = require('../controllers/painterController')

router.post('/', painterController.create)
router.get('/', painterController.getAll)

module.exports = router