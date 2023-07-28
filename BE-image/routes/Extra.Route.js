import express from "express";
import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/Extra.Controller.js";

const router = express.Router();

router.get("/extra/all", getData);
router.get("/extra/:id", getDataById);
router.post("/extra", createData);
router.patch("/extra/:id", updateData);
router.delete("/extra/:id", deleteData);

export default router;
