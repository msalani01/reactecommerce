
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD3ETeRF-WNmhtitrAscRaI9u5csB-2Puk",
  authDomain: "ecommerce-3672e.firebaseapp.com",
  projectId: "ecommerce-3672e",
  storageBucket: "ecommerce-3672e.appspot.com",
  messagingSenderId: "728224789784",
  appId: "1:728224789784:web:877eb77f4c42496cce5a6d"
};


const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)

