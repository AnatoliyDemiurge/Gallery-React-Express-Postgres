const {Painter} = require('../models/models')
const ApiError = require('../error/ApiError')

class PainterController{
    async create(req, res) {
        const {name, description} = req.body
        const painter = await Painter.create({name, description})
        return res.json(painter)
    }
    
    async getAll(req, res) {
        const painters = await Painter.findAll()
        return res.json(painters)
    }

}

module.exports = new PainterController()