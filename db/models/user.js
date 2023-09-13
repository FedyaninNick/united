const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Beat, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.STRING,
      city: DataTypes.STRING,
      sports: DataTypes.STRING,
      imageFile: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
