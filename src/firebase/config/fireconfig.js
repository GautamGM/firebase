// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { conf } from "./index.js";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:conf.api_key,
  authDomain: conf.auth_domin,
  projectId: conf.project_id,
  storageBucket: conf.storage_bucket,
  messagingSenderId: conf.message_sender_id,
  appId:conf.app_id
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
