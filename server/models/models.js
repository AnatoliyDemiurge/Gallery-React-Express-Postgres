const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, uniqie:true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Picture = sequelize.define('picture', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false, defaultValue: "1"},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
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
    description: {type:DataTypes.STRING, allowNull: false },
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
    GenrePainter
}