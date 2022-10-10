import { getFirestore, collection, } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
const db = getFirestore(app);

export const savePost = (mail, post)