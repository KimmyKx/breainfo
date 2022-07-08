"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const item_1 = __importDefault(require("../structures/item"));
const { Schema } = mongoose_1.default;
const ItemObject = new item_1.default({
    name: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: isValidName
        }
    },
    gems: Number,
    timestamp: Number,
    slug: String
});
const schema = new Schema(ItemObject);
function isValidName() {
    if (this.name.match(/[^a-zA-Z0-9' ]/))
        throw new Error('Item name should not contain special characters');
    return true;
}
schema.set('toObject', { getters: true });
schema.set('toJSON', { getters: true, virtuals: true });
exports.default = mongoose_1.default.model('Item', schema);
