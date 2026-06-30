// 1. We import the main starter engine
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

// 2. We import our Account Security Guard tools instead of analytics
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MAHLML_bSXTv30QJnXvOqmiRKrj5OEQ",
  authDomain: "pyret-7b081.firebaseapp.com",
  projectId: "pyret-7b081",
  storageBucket: "pyret-7b081.firebasestorage.app",
  messagingSenderId: "495278343046",
  appId: "1:495278343046:web:3c68d731ff9e6d64dd6207",
  measurementId: "G-L74NH5WX70"
};

// 3. Start the connection engine
const app = initializeApp(firebaseConfig);

// 4. Wake up the Security Guard (auth) so we can use it below
const auth = getAuth(app);


// ==========================================















let email=document.querySelector("#email");
let username=document.querySelector("#username");
let password=document.querySelector("#password");
let confirm_password=document.querySelector("#confirm-password");
let confirm_password_error=document.querySelector("#confirm-password-error");
let submit=document.querySelector("button");
let username_error=document.querySelector("#username-error");
let password_error=document.querySelector("#password-error");
const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{3,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;

let info_Login_E_mai=document.querySelector("#info-Login_E-mail");
let info_Login_E_mai_hover=document.querySelector("#info-Login_E-mail-hover");
info_Login_E_mai.addEventListener("mouseenter",function(det){
    info_Login_E_mai_hover.style.display="initial";
})
info_Login_E_mai.addEventListener("mouseleave",function(det){
    info_Login_E_mai_hover.style.display="none";
})
///
let info_username = document.querySelector("#info-username");
let info_username_hover = document.querySelector("#info-username-hover");

info_username.addEventListener("mouseenter", function (det) {
    info_username_hover.style.display = "initial";
});

info_username.addEventListener("mouseleave", function (det) {
    info_username_hover.style.display = "none";
});
///
let info_password = document.querySelector("#info-password");
let info_password_hover = document.querySelector("#info-password-hover");

info_password.addEventListener("mouseenter", function (det) {
    info_password_hover.style.display = "initial";
});

info_password.addEventListener("mouseleave", function (det) {
    info_password_hover.style.display = "none";
});
///
let info_confirm_password = document.querySelector("#info-confirm-password");
let info_confirm_password_hover = document.querySelector("#info-confirm-password-hover");

info_confirm_password.addEventListener("mouseenter", function (det) {
    info_confirm_password_hover.style.display = "initial";
});

info_confirm_password.addEventListener("mouseleave", function (det) {
    info_confirm_password_hover.style.display = "none";
});
///

submit.addEventListener("click",async function(det){
    det.preventDefault();
    
    if(!usernameRegex.test(username.value)){
        username_error.style.display="initial";
        return;
        
    }
    else{
        username_error.style.display="none";

    }
    if(!passwordRegex.test(password.value)){
        password_error.style.display="initial";
        return;
        
    }
    else{
        password_error.style.display="none";
        if(confirm_password.value!==password.value){
            confirm_password_error.style.display="initial";
            return;
        }
        else{
            confirm_password_error.style.display="none";
        }

    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        await updateProfile(userCredential.user, {
            displayName: username.value
        });
        await sendEmailVerification(userCredential.user);
        alert("Success! Check your email for the link.");
    } catch (error) {
        alert("Oops! " + error.message);
    }


    
})
