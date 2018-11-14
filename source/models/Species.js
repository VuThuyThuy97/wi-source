module.exports = function (sequelize, DataTypes) {
    return sequelize.define('species', {
        idSpecies: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        buyDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        produceDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isValidated: {
            type: DataTypes.STRING,
            default: false
        }
    })
}