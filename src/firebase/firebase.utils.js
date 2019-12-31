import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
	apiKey: 'AIzaSyDby4o8M8B1WtJ-uQMmtZT2tax6k7gaoQ0',
	authDomain: 'e-commerce-ddf5b.firebaseapp.com',
	databaseURL: 'https://e-commerce-ddf5b.firebaseio.com',
	projectId: 'e-commerce-ddf5b',
	storageBucket: 'e-commerce-ddf5b.appspot.com',
	messagingSenderId: '1003565319488',
	appId: '1:1003565319488:web:9bac76a67fd00d3fbb26a5',
	measurementId: 'G-EBSMLZVLH9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
