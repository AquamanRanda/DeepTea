import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyA5sxsA45VS0CMXtuxAKRw4qw9UHysh-2c',
	authDomain: 'deeptea-website.firebaseapp.com',
	databaseURL: 'https://deeptea-website.firebaseio.com',
	projectId: 'deeptea-website',
	storageBucket: 'deeptea-website.appspot.com',
	messagingSenderId: '103158642256',
	appId: '1:103158642256:web:f0e01eef31c4aa97648355',
	measurementId: 'G-0M71VVVK2M',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
