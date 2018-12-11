module.exports = function (sequelize, DataTypes) {
    return sequelize.define('history', {
        idHistory: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false
        },
        table: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}