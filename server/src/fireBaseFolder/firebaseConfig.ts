import admin, {ServiceAccount} from 'firebase-admin';
require('dotenv').config()

admin.initializeApp({
  credential:admin.credential.cert({
    "projectId": process.env.FIREBASE_PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  } as ServiceAccount)
})

const firebaseDB = admin.firestore();

export {firebaseDB}
