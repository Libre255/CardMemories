"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseDB = void 0;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
require('dotenv').config();
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert({
        "projectId": process.env.FIREBASE_PROJECT_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY,
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    })
});
var firebaseDB = firebase_admin_1.default.firestore();
exports.firebaseDB = firebaseDB;
