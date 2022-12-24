"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarsHandler = exports.getCarHandler = exports.createCarHandler = void 0;
const car_1 = __importDefault(require("../../models/car"));
const createCarHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield car_1.default.create(req.body);
        res.status(201).send({
            success: true,
            message: "Car created successfully",
            car,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCarHandler = createCarHandler;
const getCarHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = yield car_1.default.findById(req.params.carId);
        res.status(200).send({
            success: true,
            message: "Car fetched successfully",
            car,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCarHandler = getCarHandler;
const getCarsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield car_1.default.find({});
        res.status(200).send({
            success: true,
            message: "Cars fetched successfully",
            cars,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getCarsHandler = getCarsHandler;
