module.exports = function (sequelize, DataTypes) {
    return sequelize.define('using_pesticide', {
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
            type: DataTypes.STRING
        },
        usingBy: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}