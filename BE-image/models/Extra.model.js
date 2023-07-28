import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Extrakulikuler = db.define(
  "extrakulikuler",
  {
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Extrakulikuler;

(async () => {
  await db.sync();
})();
