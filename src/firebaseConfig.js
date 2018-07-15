import Firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyAp1PK-Xrq-X7jpFquLcOz1e335QqDhOyk',
  authDomain: 'rekall-vue.firebaseapp.com',
  databaseURL: 'https://rekall-vue.firebaseio.com',
  projectId: 'rekall-vue',
  storageBucket: 'rekall-vue.appspot.com',
  messagingSenderId: '493396902290',
};
Firebase.initializeApp(config);

const firestore = Firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

const auth = Firebase.auth();
auth.useDeviceLanguage();

const authProviders = {
  google: new Firebase.auth.GoogleAuthProvider(),
  twitter: new Firebase.auth.TwitterAuthProvider(),
};

export {
  firestore,
  auth,
  authProviders,
};