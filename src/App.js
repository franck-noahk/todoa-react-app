import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state = {
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

	// Toggles Comple
	markComplete = (id) => {
		this.setState({
			todos : this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};
	//deltes by copying the existing group of data minus the id given.
	delete = (id) => {
		this.setState({
			todos : [
				...this.state.todos.filter((todo) => todo.id != id),
			],
		});
	};

	render() {
		console.log(this.state.todos);
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
