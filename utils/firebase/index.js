import firebase from 'firebase/app';
import '@firebase/firestore';

const app = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(app);
}

const getFirebase = () => app;

const getFirestore = () => firebase.firestore();

const getDate = () => firebase.firestore.Timestamp.fromDate(new Date());

export { getFirebase, getFirestore, getDate };
