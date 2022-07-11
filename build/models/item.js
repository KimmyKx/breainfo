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
    image: {
        type: String,
        default: 'breainfo.png'
    },
    description: String,
    gems: Number,
    category: Array,
    farmability: String,
    droppable: String,
    tradable: String,
    displayable: String,
    breakable: String,
    growth: String,
    color: Array,
    hit: String,
    effect: String,
    obtained: String,
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
