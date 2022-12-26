import mongoose from "mongoose";

const { Schema } = mongoose;

const makeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: Schema.Types.ObjectId,
      ref: "Model",
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CarMake = mongoose.model("Make", makeSchema);

export default CarMake;
