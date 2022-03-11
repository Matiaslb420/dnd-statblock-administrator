const { DataTypes, Model } = require('sequelize');
const sequelize = require("../db")


class Character extends Model {}

Character.init(
    {
        name: {
            type: DataTypes.STRING
        },
        className: {
            type: DataTypes.STRING
        },
        money: {
            type: DataTypes.ARRAY(DataTypes.NUMBER)
        },
        level: {
            type: DataTypes.NUMBER
        },
        
    }
)
