module.exports = function (sequelize, DataTypes) {
    return sequelize.define('using_fertilizer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        dosage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE
        },
        usingBy: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}