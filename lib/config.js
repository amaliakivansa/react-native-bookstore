import { initializeApp, getApps } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  initializeAuth,
  getAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  // ADD YOUR FIREBASE CONFIGURATION HERE
  // apiKey: 'APIKEY',
  // authDomain: 'AUTH DOMAIN',
  // projectId: 'PROJECTID',
  // storageBucket: 'STORAGEBUCKET',
  // messagingSenderId: 'MESSAGINGSENDERID',
  // appId: 'ID',
};
// initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export {
  auth,
  createUserWithEmailAndPassword,
  getAuth,
  getApps,
  signInWithEmailAndPassword,
};
