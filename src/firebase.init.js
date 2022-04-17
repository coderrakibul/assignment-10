import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyArNKkMrJop9ViTzkdZOpSoxCkd6_-7bj0",
    authDomain: "medi-care-f0674.firebaseapp.com",
    projectId: "medi-care-f0674",
    storageBucket: "medi-care-f0674.appspot.com",
    messagingSenderId: "22605978360",
    appId: "1:22605978360:web:05a7f99f70bc99f9fb390d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
