import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

let config = {
	apiKey            : 'AIzaSyBOYVVlEb5oPI1nhzX0lw4S93L0q2b3nVU',
	authDomain        : 'react-todolist-5371d.firebaseapp.com',
	databaseURL       : 'https://react-todolist-5371d.firebaseio.com',
	projectId         : 'react-todolist-5371d',
	storageBucket     : 'react-todolist-5371d.appspot.com',
	messagingSenderId : '746507247149',
	appId             : '1:746507247149:web:77cef2542f76e92c1362a4',
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
//<App /> is a component and this one is spacifically app.js.
