import express from "express";
import {
  getData,
  createData,
  updateData,
  deleteData,
  getDataRPL,
  getDataBank,
  getDataAKN,
  getDataELIND,
  getDataTKRO,
  getDataTBSM,
} from "../controllers/Guru.Controller.js";

const router = express.Router();

router.get("/guru/all", getData);
// router.get("/guru/:id", getDataById);
router.post("/guru", createData);
router.patch("/guru/:id", updateData);
router.delete("/guru/:id", deleteData);

router.get("/guru/rpl", getDataRPL);
router.get("/guru/bank", getDataBank);
router.get("/guru/akn", getDataAKN);
router.get("/guru/elind", getDataELIND);
router.get("/guru/tkro", getDataTKRO);
router.get("/guru/tbsm", getDataTBSM);

export default router;
