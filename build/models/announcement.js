"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const announcement_1 = __importDefault(require("../structures/announcement"));
const AnnouncementObject = new announcement_1.default({
    title: {
        type: String,
        required: true,
        validate: {
            validator: isValidTitle
        },
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Number
    },
    slug: {
        type: String
    }
});
const schema = new Schema(AnnouncementObject);
const Announcement = mongoose_1.default.model('Announcement', schema);
function isValidTitle() {
    if (this.title.match(/[^a-zA-Z0-9'"!?%*#() ]/))
        throw new Error('Announcement title should not contain special characters');
    return true;
}
schema.set('toObject', { getters: true });
schema.set('toJSON', { getters: true, virtuals: true });
exports.default = Announcement;
