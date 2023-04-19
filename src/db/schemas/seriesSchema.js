import { required } from "nodemon/lib/config";

const mongoose = require('mongoose');

export const seriesSchema = new mongoose.Schema({
    seriesName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        minimum: 1999,
        maximum: 2199
    },
    rating: {
        type: String
    }
});