import express from "express";
import {
  getData,
  // getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/Jurusan.Controller.js";

const router = express.Router();

router.get("/jurusan/all", getData);
// router.get("/jurusan/:id", getDataById);
router.post("/jurusan", createData);
router.patch("/jurusan/:id", updateData);
router.delete("/jurusan/:id", deleteData);

export default router;
