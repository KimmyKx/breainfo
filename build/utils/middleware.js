"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSlug = exports.HandleError = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const Authorize = (req, res, next) => {
    try {
        req.data = {};
        if (!req.cookies['t']) {
            UnSign(req, next);
        }
        else {
            jsonwebtoken_1.default.verify(req.cookies['t'], process.env.JWT_ACCESS_TOKEN, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
                var _a;
                if (err)
                    return UnSign(req, next);
                const user = yield user_1.default.findOne({ username: data.user.username }).lean();
                if (!user)
                    return UnSign(req, next);
                req.data.signed = true;
                req.data.user = user;
                if ((_a = process.env.admins) === null || _a === void 0 ? void 0 : _a.includes(user.username))
                    req.data.admin = true;
                else
                    req.data.admin = false;
                next();
            }));
        }
    }
    catch (err) {
        console.error(err);
    }
};
const UnSign = (req, next) => {
    req.data.signed = false;
    req.data.admin = false;
    next();
};
const HandleError = (res, err) => {
    var _a;
    let msg = err;
    if (typeof err == 'object') {
        if ((_a = err.keyPattern) === null || _a === void 0 ? void 0 : _a.name)
            msg = 'Item name already exists';
        else if (err.message)
            msg = err.message;
    }
    res.json({ error: msg });
};
exports.HandleError = HandleError;
function toSlug(str) {
    return str.trim().replace(/\s+/g, '-').replace(/[']/g, '');
}
exports.toSlug = toSlug;
exports.default = {
    Authorize,
    HandleError: exports.HandleError,
    toSlug
};
