module.exports = function (sequelize, DataTypes) {
    return sequelize.define('plot', {
        idPlot: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        area: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}