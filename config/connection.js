const sequelize = require("sequelize");
const sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USER, "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
