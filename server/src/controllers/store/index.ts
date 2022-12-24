import { Request, Response, NextFunction } from "express";
import CarModel from "../../models/car";
import { CreateCarInput, GetCarInput } from "../../schema/car.schema";

export const createCarHandler = async (
  req: Request<{}, {}, CreateCarInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const car = await CarModel.create(req.body);
    res.status(201).send({
      success: true,
      message: "Car created successfully",
      car,
    });
  } catch (err) {
    next(err);
  }
};

export const getCarHandler = async (
  req: Request<GetCarInput["params"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const car = await CarModel.findById(req.params.carId);
    res.status(200).send({
      success: true,
      message: "Car fetched successfully",
      car,
    });
  } catch (err) {
    next(err);
  }
};

export const getCarsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cars = await CarModel.find({});
    res.status(200).send({
      success: true,
      message: "Cars fetched successfully",
      cars,
    });
  } catch (err) {
    next(err);
  }
};
