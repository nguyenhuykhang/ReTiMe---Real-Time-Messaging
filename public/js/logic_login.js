import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import { getFirestore, collection, addDoc, where, query, getDocs } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

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
var password = document.getElementById("password")
var signInBtn = document.getElementById("signInBtn")



signInBtn.addEventListener("click", async function () {
    var inputUserName = username.value
    var inputPassword = password.value
    var flag = false

    const users = query(collection(db, "users"), where("username", "==", inputUserName), where("password", "==", inputPassword))
    const querySnapshot = await getDocs(users)
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        // console.log("success")
        flag = true
        location.href = "ChatApp.html"
    })
    if (flag == false) {
        alert("No user found")
    }
    localStorage.setItem('username', inputUserName)
})
