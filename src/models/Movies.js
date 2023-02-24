import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    id: Number,
    title: {
        Type : String,
        required: true,
        unique: true,
        trim: true
    },
    year: Number,
    time: Number,
    lang: String,
    dt_rel: Date,
    rel_country: String,
  },
  {
    timestamps: true,
    versionKey: false
    
  }
);

export default model("Movie", movieSchema);
