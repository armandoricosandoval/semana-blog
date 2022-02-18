import withFirebaseAuth from "react-with-firebase-auth";
import { initializeApp} from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

//import config from '../../firebase-config';
const firebaseConfig = {
  apiKey: "AIzaSyCYxoOeZyItLUwz2EI3SC0xoQsOz4AAo44",
  authDomain: "semana-f1c5c.firebaseapp.com",
  projectId: "semana-f1c5c",
  storageBucket: "semana-f1c5c.appspot.com",
  messagingSenderId: "594268958978",
  appId: "1:594268958978:web:06168572b55b8155f6521b",
  measurementId: "G-SMW7QFQELX"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAppAuth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export default withFirebaseAuth({
  provider,
  firebaseAppAuth,
});