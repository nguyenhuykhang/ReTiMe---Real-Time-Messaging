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

var username = document.getElementById("username")
var phoneNumber = document.getElementById("phoneNumber")
var email = document.getElementById("email")
var password = document.getElementById("password")
var cfPassword = document.getElementById("cfPassword")
var signUpBtn = document.getElementById("signUpBtn")

signUpBtn.addEventListener("click", async function () {
    var inputUserName = username.value
    var inputPhoneNumber = phoneNumber.value
    var inputEmail = email.value
    var inputPassword = password.value
    var inputCfPassword = cfPassword.value
    if (inputPassword === inputCfPassword) {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              email: inputEmail,
              password: inputPassword,
              phoneNumber: inputPhoneNumber,
              username: inputUserName
            });
            username.value = ""
            phoneNumber.value = ""
            email.value = ""
            password.value = ""
            cfPassword.value = ""
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
})