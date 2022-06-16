const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, uniqie:true, allowNull:false},
    password: {type: DataTypes.STRING, allowNyll:false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Offer = sequelize.define('offer', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique:true, allowNull: false},
    service:{type:DataTypes.STRING, allowNull: false},
    text:{type:DataTypes.STRING}
})

const Picture = sequelize.define('picture', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false, defaultValue: "1"},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING(500), allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    size: {type:DataTypes.STRING, allowNull: false},
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Painter = sequelize.define('painter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false},
    description: {type:DataTypes.STRING(500), allowNull: false, length:500 },
    img: {type: DataTypes.STRING, allowNull: false}
})

const Buy = sequelize.define('buy', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type:DataTypes.STRING, allowNull: false}
})

const GenrePainter = sequelize.define('genre_painter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

Genre.hasMany(Picture)
Picture.belongsTo(Genre)

Painter.hasMany(Picture)
Picture.belongsTo(Painter)

Picture.hasOne(Buy)
Buy.belongsTo(Picture)

Genre.belongsToMany(Painter, {through: GenrePainter})
Painter.belongsToMany(Genre, {through: GenrePainter})

module.exports = {
    User,
    Buy,
    Picture,
    Genre,
    Painter,
    GenrePainter,
    Offer
}