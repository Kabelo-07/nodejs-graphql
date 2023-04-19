import { required } from "nodemon/lib/config";

const mongoose = require('mongoose');

export const friendSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['MALE', 'FEMALE', 'OTHER']
    },
    age: {
        type: Number,
        required: true,
        minimum: 15,
        maximum: 99
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});