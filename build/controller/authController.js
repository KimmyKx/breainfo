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
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HandleSignupGet = (req, res) => {
    try {
        res.render('signup', { signed: false });
    }
    catch (err) {
        console.error(err);
    }
};
const HandleLoginGet = (req, res) => {
    res.render('login', { signed: false, title: 'User Login' });
};
const HandleSignupPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const re = new RegExp(`^${req.body.username}$`, 'gi');
        const user = yield user_1.default.findOne({ username: re });
        if (user)
            return res.json({ error: 'Username has been taken' });
        const hash = bcrypt_1.default.hashSync(req.body.password, 10);
        const { username } = yield new user_1.default({ username: req.body.username, password: hash }).save();
        const token = jsonwebtoken_1.default.sign({ user: { username } }, process.env.JWT_ACCESS_TOKEN);
        res.cookie('t', token, { httpOnly: true });
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
    }
});
const HandleLoginPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const re = new RegExp(`^${username}$`, 'gi');
        const user = yield user_1.default.findOne({ username: re });
        if (!user)
            return res.json({ error: 'Username does not exist' });
        const isMatch = bcrypt_1.default.compareSync(password, user.password);
        if (!isMatch)
            return res.json({ error: 'Password is incorrect' });
        const token = jsonwebtoken_1.default.sign({ user: { username: user.username } }, process.env.JWT_ACCESS_TOKEN);
        res.cookie('t', token, { httpOnly: true });
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
    }
});
exports.default = {
    HandleSignupGet,
    HandleLoginGet,
    HandleLoginPost,
    HandleSignupPost
};
