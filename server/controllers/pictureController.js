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
        const {painterId, genreId} = req.query
        let pictures; 
        if (!painterId && !genreId) {
            pictures = await Picture.findAll() 
        }
        if (painterId && !genreId) {
            pictures = await Picture.findAll({where:{painterId}}) 
        }
        if (!painterId && genreId) {
            pictures = await Picture.findAll({where:{genreId}}) 
        }
        if (painterId && genreId) {
            pictures = await Picture.findAll({where:{genreId, painterId}}) 
        }
        return res.json(pictures)
    }

    async getOne(req, res){
        
    }
}

module.exports = new PictureController()