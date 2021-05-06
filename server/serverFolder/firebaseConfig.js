import admin from 'firebase-admin'
import serviceAccount from '../misLLaves/llave.json'

admin.initializeApp({
  credential:admin.credential.cert(serviceAccount)
})
