import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import * as firebase from 'firebase';

class App extends Component {
	constructor() {
		super();

		this.state = {
			todos : [
				{
					id        : 1,
					title     : 'take out the trash.',
					completed : false,
				},
				{
					id        : 2,
					title     : 'Dinner with the wife.',
					completed : false,
				},
				{
					id        : 3,
					title     : 'Go to school.',
					completed : true,
				},
			],
		};
	}

	componentDidMount() {
		let rootRef = firebase.database();
		let todosRef = rootRef.ref().child('todos');
		todosRef.on('value', (snap) => {
			let obj = [];
			snap.forEach((snapshot) => {
				obj.push(snapshot.val());
			});
			console.log(obj);
			this.setState({
				todos : obj,
			});
		});
	}

	// Toggles Comple
	markComplete = (id) => {
		let completed;
		let title;
		let snapid;
		firebase.database().ref('todos/' + id).once('value', (snap) => {
			completed = snap.val().completed;
			title = snap.val().title;
			snapid = snap.val().id;
		});

		if (completed == true) {
			firebase
				.database()
				.ref('todos/' + id)
				.update({
					completed : false,
					title     : title,
					id        : snapid,
				})
				.catch((e) => {
					console.log(e);
				});
		} else {
			firebase
				.database()
				.ref('todos/' + id)
				.update({
					completed : true,
					title     : title,
					id        : snapid,
				})
				.catch((e) => {
					console.log(e);
				});
		}
		// this.setState({
		// 	todos : this.state.todos.map((todo) => {
		// 		if (todo.id === id) {
		// 			todo.completed = !todo.completed;
		// 		}
		// 		return todo;
		// 	}),
		// });
	};
	//deltes by copying the existing group of data minus the id given.
	delete = (id) => {
		let rootRef = firebase.database();
		let todosRef = rootRef.ref().child('todos');

		firebase.database().ref('todos/' + id).remove();

		// this.setState({
		// 	todos : [
		// 		...this.state.todos.filter((todo) => todo.id != id),
		// 	],
		// });
	};

	addTask = (title, id, completed) => {
		let rootRef = firebase.database();
		let todosRef = rootRef.ref().child('todos');

		

	};

	render() {
		return (
			<div className='App'>
				<h1>App</h1>
				<Todos
					todos={this.state.todos}
					markComplete={this.markComplete}
					delete={this.delete}
				/>
			</div>
		);
	}
}

export default App;
