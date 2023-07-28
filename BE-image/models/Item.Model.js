import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const KepSek = db.define(
  "kepsek",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default KepSek;

(async () => {
  await db.sync();
})();
