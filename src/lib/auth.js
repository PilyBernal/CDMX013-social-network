/* eslint-disable import/no-unresolved */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../lib/config.js'

export const auth = getAuth();
export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);