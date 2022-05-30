const uuid = require('uuid')
const path = require('path');
const {Picture} = require('../models/models')
const ApiError = require('../error/ApiError');

class PictureController{
    async create(req, res){
        try {
            let {name, price, description, year, size, painterId, genreId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const picture = await Picture.create({name, price, description, year, size, painterId, genreId, img: fileName});
            return res.json(picture)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    
    async getAll(req, res) {
        let {painterId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 25
        let offset = page * limit - limit
        let pictures; 
        if (!painterId && !genreId) {
            pictures = await Picture.findAndCountAll({limit, offset}) 
        }
        if (painterId && !genreId) {
            pictures = await Picture.findAndCountAll({where:{painterId}, limit, offset}) 
        }
        if (!painterId && genreId) {
            pictures = await Picture.findAndCountAll({where:{genreId}, limit, offset}) 
        }
        if (painterId && genreId) {
            pictures = await Picture.findAndCountAll({where:{genreId, painterId}, limit, offset}) 
        }
        return res.json(pictures)
    }

    async getOne(req, res){
        const {id} = req.params
        const picture = await Picture.findOne(
            {
                where: {id}
            }
        )
        return res.json(picture)
    }   
}

module.exports = new PictureController()