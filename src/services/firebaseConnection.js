import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBKYXty-rFv0Ty8aI4A0X9fpR-go2RArAg",
  authDomain: "projeto-find-job.firebaseapp.com",
  projectId: "projeto-find-job",
  storageBucket: "projeto-find-job.appspot.com",
  messagingSenderId: "940526225619",
  appId: "1:940526225619:web:ae8e8b5547b8876239ac26"
};

if(!firebase.apps.length){
  const app = firebase.default.initializeApp(firebaseConfig);
}

export default firebase