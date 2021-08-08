"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getCards_1 = require("./getCards");
var cardsAPI = express_1.default.Router();
var shuffleArray = function (array) {
    for (var index = array.length - 1; index > 0; index--) {
        var j = Math.floor(Math.random() * index);
        var temp = array[index];
        array[index] = array[j];
        array[j] = temp;
    }
    return array;
};
cardsAPI.get('/', function (req, res) {
    getCards_1.getCards().then(function (cardsArray) { return res.json(shuffleArray(cardsArray)); });
});
exports.default = cardsAPI;
