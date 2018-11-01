module.exports = function (sequelize, DataTypes) {
    return sequelize.define('harvest', {
        idHarvest: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}