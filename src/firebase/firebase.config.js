// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtB5FK8Mu_haKk1bzfmSj_svcNWzdPiD4",
  authDomain: "chef-recipe-hunter-409b5.firebaseapp.com",
  projectId: "chef-recipe-hunter-409b5",
  storageBucket: "chef-recipe-hunter-409b5.appspot.com",
  messagingSenderId: "698714161265",
  appId: "1:698714161265:web:2dcff0345fa431137d1bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;