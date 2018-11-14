module.exports = function (sequelize, DataTypes) {
    return sequelize.define('plant', {
        idPlant: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        plantDay: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}