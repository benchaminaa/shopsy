module.exports = (sequelize, DataTypes) => {
  const OrederItem = sequelize.define('OrderItem', {
    sku: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  });

  OrederItem.associate = (models) => {
    OrederItem.belongsTo(models.Order, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return OrederItem;
};
