const Router =  require('express')
const router = new Router()
const buyController = require('../controllers/buyController')

router.post('/', buyController.create)
router.get('/',)
router.get('/:id',)


module.exports = router