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
        level: {
            type: DataTypes.NUMBER
        },
        race:{
            type: DataTypes.STRING
        },
        background:{
            type: DataTypes.TEXT('tiny')
        },
        stats:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue:[10,10,10,10,10,10]
        },
        inpiration:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        proficiency:{
            type: DataTypes.INTEGER
        },
        abilities:{
            type: DataTypes.ARRAY(DataTypes.BOOLEAN),
            defaultValue:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

        },
        savingThrow:{
            type: DataTypes.ARRAY(DataTypes.BOOLEAN),
            defaultValue:[false,false,false,false,false,false,]
        },
        classArmor:{
            type: DataTypes.INTEGER
        },
        velocity:{
            type: DataTypes.INTEGER
        },
        hpMax:{
            type: DataTypes.INTEGER
        },
        hpCurrent:{
            type:DataTypes.INTEGER
        },
        hpTemp:{
            type: DataTypes.INTEGER
        },
        hpDice:{
            type: DataTypes.STRING
        },
        proficiencys:{
            type:DataTypes.TEXT('tiny')
        },
        languajes:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: ["common"],
            set: function (languages) {
                languages = languages || [];
                if (typeof languages === "string") {
                    languages = languages.split(",").map(function (str) {
                    return str.trim();
                  });
                }
                this.setDataValue("languages", languages);
            },
        },
        money: {
            type: DataTypes.ARRAY(DataTypes.NUMBER)
        },
        equipment:{
            type:DataTypes.TEXT('tiny')
        },
        characteristics:{
            type:DataTypes.TEXT('tiny')
        },
        appareance:{
            type: DataTypes.TEXT('tiny')
        },
        backstory:{
            type:DataTypes.TEXT
        }
        
    }
)
