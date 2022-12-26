import express from "express";
import {
  createCarHandler,
  createMakeHandler,
  createModelHandler,
  getCarHandler,
  getCarsHandler,
  getModelsHandler,
  getSingleModelHandler,
} from "../controllers/store";
import validateResource from "../middlewares/validateResource";
import { createCarSchema, getCarSchema } from "../schema/car.schema";

const router = express.Router();

router.post("/", validateResource(createCarSchema), createCarHandler);
router.get("/car/:carId", getCarHandler);
router.get("/", getCarsHandler);

router.post("/model", createModelHandler);
router.get("/models", getModelsHandler);
router.get("/models/model/:modelId", getSingleModelHandler);

router.post("/make", createMakeHandler);
// router.get("/make", getMakesHandler);
// router.get("/make/:makeId", getSingleMakeHandler);

module.exports = router;
