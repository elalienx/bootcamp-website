// NPM package
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfiguration = {
  apiKey: "AIzaSyDuUNCEV-FmkVTs1FMZ3dLqmBYiOTlp04M",
  authDomain: "novare-tech-education.firebaseapp.com",
  projectId: "novare-tech-education",
  storageBucket: "novare-tech-education.appspot.com",
  messagingSenderId: "37039538759",
  appId: "1:37039538759:web:9d3bc1fa01031dde4f6762",
  measurementId: "G-KTJFCBS61V",
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export const analytics = getAnalytics(firebaseInstance);
