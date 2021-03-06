"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var serverPORT = 8080;
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/', function (req, res) {
    res.json({ msg: "welcom to my card world" });
});
app.listen(serverPORT, function () {
    console.log("***** Card Server has been activated! ******");
});
