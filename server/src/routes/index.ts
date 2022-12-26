import express from "express";
import {
  createCarHandler,
  createMakeHandler,
  createModelHandler,
  getCarHandler,
  getCarsHandler,
  getMakesHandler,
  getModelsHandler,
  getSingleMakeHandler,
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

router.post("/makes", createMakeHandler);
router.get("/makes", getMakesHandler);
router.get("/makes/make/:makeId", getSingleMakeHandler);

module.exports = router;
