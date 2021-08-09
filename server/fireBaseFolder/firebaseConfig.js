var admin = require( 'firebase-admin');
require('dotenv').config()

admin.initializeApp({
  credential:admin.credential.cert({
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "type":process.env.TYPE,
    "private_key_id":process.env.FIREBASE_KEYID,
    "auth_uri":process.env.AUTH_URI,
    "auth_provider_x509_cert_url":process.env.AUTH_CERT,
    "token_uri":process.env.TOKEN_URI,
    "client_x509_cert_url":process.env.CLIENT_AUTH,
    "client_id":process.env.CLIENT_ID
  })
})

const firebaseDB = admin.firestore();

module.exports = {firebaseDB}
