"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var addPlayerToRanking_1 = require("./addPlayerToRanking");
var getRanking_1 = require("./getRanking");
var rankingAPI = express_1.default.Router();
rankingAPI.post('/', function (req, res) {
    var player = req.body;
    addPlayerToRanking_1.addPlayerToRanking({
        name: player.name,
        score: player.score,
        date: player.date,
        time: player.time
    });
    res.json(player);
});
rankingAPI.get('/', function (req, res) {
    getRanking_1.getRanking()
        .then(function (rankingArray) {
        var rankingTopToBottomByScore = rankingArray.sort(function (a, b) {
            var n = b.score - a.score;
            if (n !== 0) {
                return n;
            }
            return b.time - a.time;
        });
        var SelectTop5Players = rankingTopToBottomByScore.map(function (player, index) { return index < 5 ? player : ""; });
        res.json(SelectTop5Players);
    });
});
exports.default = rankingAPI;
