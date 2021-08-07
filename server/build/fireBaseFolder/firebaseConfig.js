"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseDB = void 0;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var llave_json_1 = __importDefault(require("../misLlaves/llave.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(llave_json_1.default)
});
var firebaseDB = firebase_admin_1.default.firestore();
exports.firebaseDB = firebaseDB;
