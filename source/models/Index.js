let Sequelize = require('sequelize');
const sequelize = new Sequelize('wi_source', 'root', '', {
    dialect: 'mysql'
});
sequelize.sync()
    .then(() => {
        console.log('Connect to database successfully');
    }).catch(err => {
        console.log('Error connecting to database', err);
    });

var models = [
    'Plot',
    'Product',
    'Species',
    'Harvest',
    'Class',
    'UsingFertilizer',
    'UsingPesticide',
    'BuyingFertilizer',
    'BuyingPesticide'
];
models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function (m) {
    m.Species.hasMany(m.Plot, {
        foreignKey: { name: "idSpecies", allowNull: true }
    });
    m.Plot.belongsTo(m.Species, {
        foreignKey: { name: "idSpecies", allowNull: true }
    });

    m.Species.hasMany(m.Product, {
        foreignKey: { name: "idSpecies", allowNull: false }
    });

    m.Product.belongsTo(m.Species, {
        foreignKey: { name: "idSpecies", allowNull: false }
    });

    m.Class.hasMany(m.Product, {
        foreignKey: { name: "idClass", allowNull: false }
    });

    m.Product.belongsTo(m.Class, {
        foreignKey: { name: "idClass", allowNull: false }
    })

    m.Harvest.hasMany(m.Class, {
        foreignKey: { name: "idHarvest", allowNull: false }
    })

    m.Class.belongsTo(m.Harvest, {
        foreignKey: { name: "idHarvest", allowNull: false }
    })

    m.Plot.hasMany(m.Harvest, {
        foreignKey: { name: 'idPlot', allowNull: false },
    })

    m.Harvest.belongsTo(m.Plot, {
        foreignKey: { name: 'idPlot', allowNull: false }
    })

    m.Plot.hasMany(m.UsingFertilizer, {
        foreignKey: { name: 'idPlot', allowNull: false },
    })

    m.UsingFertilizer.belongsTo(m.Plot, {
        foreignKey: { name: 'idPlot', allowNull: false }
    })

    m.Plot.hasMany(m.UsingPesticide, {
        foreignKey: { name: 'idPlot', allowNull: false },
    })

    m.UsingPesticide.belongsTo(m.Plot, {
        foreignKey: { name: 'idPlot', allowNull: false }
    })

    m.BuyingFertilizer.hasMany(m.UsingFertilizer, {
        foreignKey: { name: 'idFertilizer', allowNull: false },
    })

    m.UsingFertilizer.belongsTo(m.BuyingFertilizer, {
        foreignKey: { name: 'idFertilizer', allowNull: false }
    })

    m.BuyingPesticide.hasMany(m.UsingPesticide, {
        foreignKey: { name: 'idPesticide', allowNull: false },
    })

    m.UsingPesticide.belongsTo(m.BuyingPesticide, {
        foreignKey: { name: 'idPesticide', allowNull: false }
    })

})(module.exports);

module.exports.sequelize = sequelize;