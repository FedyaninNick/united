const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Beat extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Beat.init(
    {
      title: DataTypes.STRING,
      janre: DataTypes.STRING,
      price: DataTypes.STRING,
      autor: DataTypes.STRING,
      key: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      imageFile: DataTypes.BLOB, // Для хранения бинарных данных изображения
    },
    {
      sequelize,
      modelName: "Beat",
    }
  );
  return Beat;
};
