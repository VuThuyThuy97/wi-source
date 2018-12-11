module.exports = function (sequelize, DataTypes) {
    return sequelize.define('buying_fertilizer', {
        idFertilizer: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false
        },
        buyDate: {
            type: DataTypes.STRING
        },
        buyPlace: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usable: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}