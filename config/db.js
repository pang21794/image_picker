const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodedb_5tfz', 'nodedb', 'kelTlfEaeZXjxQNfPqUXSBrxefn3U9II', {
host: 'dpg-csi9vht6l47c73f61mbg-a',
dialect: 'postgres',
});

module.exports = sequelize;