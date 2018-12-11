module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }, 
        status: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'Inactive'
        },
    })
}