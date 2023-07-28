import express from "express";
import {
  getData,
  // getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/Item.Controller.js";

const router = express.Router();

router.get("/kepsek/all", getData);
// router.get("/kepsek/:id", getDataById);
router.post("/kepsek", createData);
router.patch("/kepsek/:id", updateData);
router.delete("/kepsek/:id", deleteData);

export default router;
