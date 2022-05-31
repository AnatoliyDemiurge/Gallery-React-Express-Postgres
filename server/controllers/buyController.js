const uuid = require('uuid')
const path = require('path');
const {Buy} = require('../models/models')
const ApiError = require('../error/ApiError');
const {Picture} = require('../models/models')

class BuyController{
    async create(req, res){
        let {email, pictureId} = req.body
        const buy = await Buy.create({email, pictureId})
        let id = pictureId
        let picture = await Picture.findOne(
            {
                where: {id}
            }
        )
        picture.count = 0
        await picture.save()
        return res.json({buy, picture})
    }
    
    async getAll(req, res) {
        const buys = await Buy.findAll()
        return res.json(buys)
    }
    async getAllOneUser(req, res){
        let {email} = req.query
        const buys = await Buy.findAll({where:{email}})
        return res.json(buys)
        // return res.json("Working")
    }
    async getOne(req, res){
        const {id} = req.params
        const buy = await Buy.findOne(
            {
                where: {id}
            }
        )
        return res.json(buy)
    }   
}

module.exports = new BuyController()