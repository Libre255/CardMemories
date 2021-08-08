"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cardsAPI_1 = __importDefault(require("./cards/cardsAPI"));
var rankingAPI_1 = __importDefault(require("./ranking/rankingAPI"));
var path_1 = __importDefault(require("path"));
require('dotenv').config();
var app = express_1.default();

// app.set('port', (process.env.PORT || 8080));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(express.static(__dirname + '/../app/build'));
app.use('/cards', cardsAPI_1.default);
app.use('/ranking', rankingAPI_1.default);
app.get('/', function (req, res) {
    res.json({ msg: "welcom to my card world" });
});
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname + '/../app/build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
app.listen(process.env.PORT, function () {
    console.log("***** Card Server has been activated! ******");
});
