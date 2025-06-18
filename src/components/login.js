
	// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
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


	document.addEventListener('DOMContentLoaded', () => {

const loginForm = document.getElementById('loginForm');

const nameInput = document.getElementById('nameInput');

const emailInput = document.getElementById('emailInput');

const accessCodeInput = document.getElementById('accessCodeInput');

const messageArea = document.getElementById('messageArea');
const correctAccessCode = 'NYCiSch00lprom25'; 
loginForm.addEventListener('submit', async (event) => {

event.preventDefault(); // Prevent page refresh


const name = nameInput.value.trim();

const email = emailInput.value.trim();

const enteredCode = accessCodeInput.value.trim();


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


// If code is correct, proceed with Firebase Anonymous Auth and Firestore save

try {


	const userCredential = await signInAnonymously(auth);

	const user = userCredential.user;

	console.log('Signed in anonymously with UID:', user.uid);



	const userRef = doc(db, 'attendees', user.uid);

	await setDoc(userRef, {

		name: name,

		email: email,

		timestamp: new Date()

	});

	console.log('User info saved to Firestore:', user.uid);




	window.location.href = '/photobooth'; 


} catch (error) {

	

	console.error('Login or Firestore save failed:', error);

	messageArea.textContent = 'An error occurred during login. Please try again.';

}

});

});

