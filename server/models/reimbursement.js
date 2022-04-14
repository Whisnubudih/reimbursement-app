'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reimbursement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reimbursement.belongsTo(models.User,{foreignKey: "UserId"})
      Reimbursement.belongsTo(models.Action,{foreignKey: "ActionId"})
    }
  };
  Reimbursement.init({
    datePurchase:  {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: { msg: "date Purchase Required" },
        notEmpty: { msg: "date Purchase cannot be empty" },
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "description Required" },
        notEmpty: { msg: "description cannot be empty" },
      },
    },
    amount:  {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: "amount Required" },
        notEmpty: { msg: "amount cannot be empty" },
      },
    },
    receipt: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "receipt Required" },
        notEmpty: { msg: "receipt cannot be empty" },
      },
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "status Required" },
        notEmpty: { msg: "status cannot be empty" },
      },
    },
    UserId: DataTypes.INTEGER,
    ActionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reimbursement',
  });
  return Reimbursement;
};