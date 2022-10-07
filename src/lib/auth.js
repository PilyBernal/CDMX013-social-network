/* eslint-disable import/no-unresolved */
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../lib/config.js'

export const auth = getAuth(app);
export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const existingUserAccess = (email, password) => signInWithEmailAndPassword(auth, email, password);

