"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlayerToRanking = void 0;
var firebaseConfig_1 = require("../fireBaseFolder/firebaseConfig");
var addPlayerToRanking = function (player) {
    firebaseConfig_1.firebaseDB.collection('ranking').doc().set(player);
};
exports.addPlayerToRanking = addPlayerToRanking;
