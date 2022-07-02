import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo de la nota es requerido"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
