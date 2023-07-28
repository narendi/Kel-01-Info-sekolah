import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Jurusan = db.define(
  "jurusan",
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

export default Jurusan;

(async () => {
  await db.sync();
})();
