import admin, {ServiceAccount} from 'firebase-admin';
import serviceAccount from '../misLlaves/llave.json';

admin.initializeApp({
  credential:admin.credential.cert(serviceAccount as ServiceAccount)
})

const firebaseDB = admin.firestore();

export {firebaseDB}
