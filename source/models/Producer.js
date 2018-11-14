module.exports = function (sequelize, DataTypes) {
    return sequelize.define('producer', {
        idProducer: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, 
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        delegate: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })
}