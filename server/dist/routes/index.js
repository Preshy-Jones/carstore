"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_1 = require("../controllers/store");
const validateResource_1 = __importDefault(require("../middlewares/validateResource"));
const car_schema_1 = require("../schema/car.schema");
const router = express_1.default.Router();
router.post("/", (0, validateResource_1.default)(car_schema_1.createCarSchema), store_1.createCarHandler);
router.get("/car/:carId", store_1.getCarHandler);
router.get("/", store_1.getCarsHandler);
router.post("/model", store_1.createModelHandler);
router.get("/models", store_1.getModelsHandler);
router.get("/models/model/:modelId", store_1.getSingleModelHandler);
router.post("/makes", store_1.createMakeHandler);
router.get("/makes", store_1.getMakesHandler);
router.get("/makes/make/:makeId", store_1.getSingleMakeHandler);
module.exports = router;
