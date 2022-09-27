import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestone } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDWV7jOE9KsGJZx1QuoPzSa4KImO_xFSHo',
  authDomain: 'loto-42281.firebaseapp.com',
  projectId: 'loto-42281',
  storageBucket: 'loto-42281.appspot.com',
  messagingSenderId: '664575540224',
  appId: '1:664575540224:web:130726ca532087e5d4ece5',
  measurementId: 'G-SK96F7S6NM',
});
const auth = getAuth(firebaseApp);
const db = getFirestone(firebaseApp);

onAuthStateChanged (auth, user =>{
  if( user ≠ null){
    console.log ('logen in');

  } else{
    console.log("no user");
  }
})
