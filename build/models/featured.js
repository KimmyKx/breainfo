"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const schema = new Schema({
    itemSlug: {
        type: String
    },
    timestamp: Number
}, {
    toObject: {
        virtuals: true
    }
});
schema.virtual('item', {
    ref: 'Item',
    localField: 'itemSlug',
    foreignField: 'slug',
    justOne: true
});
exports.default = mongoose_1.default.model('Featured', schema);
