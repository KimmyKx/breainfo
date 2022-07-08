"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const middleware_1 = require("../utils/middleware");
class Announcement {
    constructor(info) {
        this.title = info.title;
        this.content = info.content;
        this.timestamp = info.timestamp || Date.now();
        this.slug = info.slug || (0, middleware_1.toSlug)(this.title);
    }
}
exports.default = Announcement;
