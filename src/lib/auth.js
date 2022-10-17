/* eslint-disable import/no-unresolved */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../lib/config.js'
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export const auth = getAuth();
export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const user = auth.currentUser;

export const existingUserAccess = (mail, password) => signInWithEmailAndPassword(auth, mail, password)

export const onAuthStateChanged = (auth, user) => {
  if (user.email) {
    const mail = user.email;
  } else {
    console.log('No user is signed in');
  }
};
