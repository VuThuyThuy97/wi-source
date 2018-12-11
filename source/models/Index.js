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
    'User',
    'Producer',    
    'Plot',
    'Product',
    'Species',
    'Harvest',
    'Class',
    'Plant',
    'UsingFertilizer',
    'UsingPesticide',
    'BuyingFertilizer',
    'BuyingPesticide',
    'History'
];
models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function (m) {
    

    m.Producer.hasMany(m.Plot, {
        foreignKey: { name: "idProducer", allowNull: true }
    });
    m.Plot.belongsTo(m.Producer, {
        foreignKey: { name: "idProducer", allowNull: true }
    });

    m.Plot.hasMany(m.Plant, {
        foreignKey: { name: "idPlot", allowNull: true }
    });
    m.Plant.belongsTo(m.Plot, {
        foreignKey: { name: "idPlot", allowNull: true }
    });

    m.Species.hasMany(m.Plant, {
        foreignKey: { name: "idSpecies", allowNull: true }
    });
    m.Plant.belongsTo(m.Species, {
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


    m.Plant.hasMany(m.Product, {
        foreignKey: { name: 'idPlant', allowNull: false },
    })

    m.Product.belongsTo(m.Plant, {
        foreignKey: { name: 'idPlant', allowNull: false }
    })

    m.BuyingFertilizer.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.BuyingPesticide.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Class.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Harvest.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Plant.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Plot.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Producer.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Product.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.Species.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.UsingFertilizer.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })
    m.UsingPesticide.belongsTo(m.User, {
        foreignKey: { name: 'idUser', allowNull: false }
    })

})(module.exports);

module.exports.sequelize = sequelize;