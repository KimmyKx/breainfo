"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const middleware_1 = require("../utils/middleware");
class Item {
    constructor(info) {
        this.name = info.name;
        this.gems = info.gems;
        this.slug = info.slug || (0, middleware_1.toSlug)(this.name);
        if (!info.timestamp)
            this.timestamp = Date.now();
        this.timestamp = info.timestamp || Date.now();
    }
}
exports.default = Item;
