
	// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzuoGT6ep4fwpgsyItZIXp07zWKnlF5Q4",
  authDomain: "partyline-1ba54.firebaseapp.com",
  projectId: "partyline-1ba54",
  storageBucket: "partyline-1ba54.firebasestorage.app",
  messagingSenderId: "845616501130",
  appId: "1:845616501130:web:bd5ca4f04f5177c08b7873",
  measurementId: "G-9X0WXSZ0P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const db = getFirestore(app);
const presetPassword = "NYCiSch00lprom25"; 


	document.addEventListener('DOMContentLoaded', () => {

const loginForm = document.getElementById('loginForm');

const nameInput = document.getElementById('nameInput');

const emailInput = document.getElementById('emailInput');

const accessCodeInput_presetpassword = document.getElementById('accessCodeInput');

const messageArea = document.getElementById('messageArea');
const correctAccessCode = 'NYCiSch00lprom25'; 
loginForm.addEventListener('submit', async (event) => {

event.preventDefault(); // Prevent page refresh


const name = nameInput.value.trim();

const email = emailInput.value.trim();

const enteredCode = accessCodeInput_presetpassword.value.trim();


messageArea.textContent = ''; // Clear previous messages


// Basic validation

if (!name || !email || !enteredCode) {

	messageArea.textContent = 'Please fill in all fields.';

	return;

}



// Simple access code check (client-side - see security note above)

if (enteredCode !== correctAccessCode) {

	messageArea.textContent = 'Invalid access code.';

	return;

}


// If shits smooth should follow to this

try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, presetPassword);
    
    const user = userCredential.user;
    console.log('New user created successfully with preset password:', user.uid);

    //brings them to photobooth page
    window.location.href = '/photobooth';
  
  } catch (error) {
    // error handeling
    const errorCode = error.code;
    const errorMessage = error.message;
  
    if (errorCode === 'auth/email-already-in-use') {
      try {
        await signInWithEmailAndPassword(auth, email, presetPassword);
        window.location.href = '/photobooth';
      } catch (loginError) {
        messageArea.textContent = 'Login failed: ' + loginError.message;
      }
    }

     else if (errorCode === 'auth/invalid-email') {
      console.error('The email address is invalid.');
    }  else if (errorCode === 'auth/operation-not-allowed') {
       // email+password auth not verified
       console.error('Email/Password sign-in is not enabled for this project.');
    }
    else {
      console.error('Error creating user:', errorMessage);
    }
  }

});

});

///NEWWW LOGIC


