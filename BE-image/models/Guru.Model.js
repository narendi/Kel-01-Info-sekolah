// Pada file Guru.Model.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Guru = db.define(
  "guru_biasa",
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    jurusan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Guru;

(async () => {
  await db.sync();
})();
