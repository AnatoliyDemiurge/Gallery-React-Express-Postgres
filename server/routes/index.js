const Router =  require('express')
const router = new Router()
const pictureRouter = require('./pictureRouter')
const userRouter = require('./userRouter')
const painterRouter = require('./painterRouter')
const genreRouter = require('./genreRouter')
const buyRouter = require('./buyRouter')

router.use('/user', userRouter)
router.use('/picture', pictureRouter)
router.use('/genre', genreRouter)
router.use('/painter', painterRouter)
router.use('/buy', buyRouter)

module.exports = router