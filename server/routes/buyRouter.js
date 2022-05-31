const Router =  require('express')
const router = new Router()
const buyController = require('../controllers/buyController')

router.post('/', buyController.create)
router.get('/', buyController.getAll)
router.get('/history',buyController.getAllOneUser)
router.get('/:id', buyController.getOne)


module.exports = router