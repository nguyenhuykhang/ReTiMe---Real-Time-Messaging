import {initializeApp} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBO2gHb1pczuLm1KaHaF2Dkh7R2YS5_o0g",
    authDomain: "spartahack-8.firebaseapp.com",
    projectId: "spartahack-8",
    storageBucket: "spartahack-8.appspot.com",
    messagingSenderId: "162480578965",
    appId: "1:162480578965:web:de87b282d0471e82f7569c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

{/* <script src="https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js" type="module"></script>
<script src="https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js" type="module"></script> */}
