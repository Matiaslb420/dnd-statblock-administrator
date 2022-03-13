const {Op, DataTypes, Model} = require("sequelize")
const sequelize = require('../db')
const bcrypt = require("bcrypt")

class User extends Model {
    hash(password, salt){
        return bcrypt.hash(password, salt);
    }
}

User.init(
    {
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize, modelName: "users"
    })

User.beforeCreate((user) => {
    return bcrypt
    .genSalt(5)
    .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt);
    })
    .then((hash) => {
        user.password = hash;
    })
})

module.exports = User;