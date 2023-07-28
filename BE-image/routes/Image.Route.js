import express from "express";
import {
  getData,
  // getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/Image.Controller.js";

const router = express.Router();

router.get("/image/all", getData);
// router.get("/image/:id", getDataById);
router.post("/image", createData);
router.patch("/image/:id", updateData);
router.delete("/image/:id", deleteData);

export default router;
