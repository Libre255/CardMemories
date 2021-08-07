"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCards = void 0;
var firebaseConfig_1 = require("../fireBaseFolder/firebaseConfig");
var addCards = function (amountOfCards) {
    var cardsArray = [];
    var id = 0;
    for (var i = 0; i < amountOfCards; i++) {
        for (var s = 0; s < 2; s++) {
            cardsArray.push({
                id: id += 1,
                value: i + 1,
                smashCard: false,
                flippCard: false,
            });
        }
    }
    ;
    cardsArray.forEach(function (card) {
        firebaseConfig_1.firebaseDB.collection('cardsInfo').doc(card.id.toString()).set(card);
    });
};
exports.addCards = addCards;
