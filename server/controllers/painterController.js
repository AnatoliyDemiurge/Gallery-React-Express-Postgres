const uuid = require('uuid')
const path = require('path');
const {Painter} = require('../models/models')
const ApiError = require('../error/ApiError')

class PainterController{
    async create(req, res) {
        let {name, description} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const painter = await Painter.create({name, description, img:fileName})
        return res.json(painter)
    }
    
    async getAll(req, res) {
        const painters = await Painter.findAll()
        return res.json(painters)
    }

}

module.exports = new PainterController()