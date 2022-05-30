const uuid = require('uuid')
const path = require('path');
const {Buy} = require('../models/models')
const ApiError = require('../error/ApiError');

class BuyController{
    async create(req, res){
        let {email, pictureId} = req.body
        const buy = await Buy.create({email, pictureId})
        return res.json(buy)
    }
    
    async getAll(req, res) {
       
    }

    async getOne(req, res){
       
    }   
}

module.exports = new BuyController()