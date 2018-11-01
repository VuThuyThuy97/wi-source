module.exports = function (sequelize, DataTypes) {
    return sequelize.define('class', {
        idClass: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}