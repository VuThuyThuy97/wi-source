module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product', {
        idProduct: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING
        },
        hsd: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    })
}