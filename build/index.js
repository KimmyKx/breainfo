"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
require('./utils/db');
require('./utils/prototype');
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const routes_1 = __importDefault(require("./utils/routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use((0, cookie_parser_1.default)());
app.set('views', 'public/views');
app.use(express_ejs_layouts_1.default);
app.set('view engine', 'ejs');
app.use(routes_1.default);
app.use((req, res) => {
    res.status(404);
    res.render('404');
});
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));