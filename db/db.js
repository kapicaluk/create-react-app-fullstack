const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/db-name", // enter database name
  {
    logging: false
  }
);

module.exports = db;
