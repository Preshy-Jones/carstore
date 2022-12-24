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
    const { model, make, year } = req.query;

    const minPrice = parseInt(req.query.minPrice as string);
    const maxPrice = parseInt(req.query.maxPrice as string);

    interface Filter {
      model?: string;
      make?: string;
      year?: string;
      price?: { $gt: number; $lt: number };
    }
    const filter: Record<string, any> = {};
    if (model) {
      filter["model"] = model as string;
    }
    if (make) {
      filter["make"] = make as string;
    }
    if (year) {
      filter["year"] = year as string;
    }
    if (minPrice && maxPrice) {
      filter["price"] = { $gt: minPrice, $lt: maxPrice };
    } else if (minPrice) {
      filter["price"] = { $gt: minPrice };
    } else if (maxPrice) {
      filter["price"] = { $lt: maxPrice };
    }

    const cars = await CarModel.find(filter);
    res.status(200).send({
      success: true,
      message: "Cars fetched successfully",
      cars,
      model,
      make,
    });
  } catch (err) {
    next(err);
  }
};
