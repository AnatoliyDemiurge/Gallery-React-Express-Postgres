const Router =  require('express')
const router = new Router()
const painterController = require('../controllers/painterController')

router.post('/', painterController.create)
router.get('/', painterController.getAll)
router.get('/:id',painterController.getOne)
router.post('/delete/:id', painterController.delete)

module.exports = router