import express from "express";
import {
  createCarHandler,
  getCarHandler,
  getCarsHandler,
} from "../controllers/store";
import validateResource from "../middlewares/validateResource";
import { createCarSchema, getCarSchema } from "../schema/car.schema";

const router = express.Router();

router.post("/", validateResource(createCarSchema), createCarHandler);
router.get("/:carId", getCarHandler);
router.get("/", getCarsHandler);

module.exports = router;
