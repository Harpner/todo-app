module.exports = (sequelize, DataTypes) =>
  sequelize.define('Task', {
    title: DataTypes.STRING,
    status: DataTypes.STRING
  })
