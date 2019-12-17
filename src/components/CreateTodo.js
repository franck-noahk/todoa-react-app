import React, { Component } from 'react';

export default class CreateTodo extends Component {
	addTodo = () => {
		let todoTitle = document.getElementById('newTodo').value;

		this.props.addTask(todoTitle, false);
	};

	render() {
		return (
			<div>
				<h3>Create new Task</h3>
				<input type='text' id='newTodo' style={{ width: '90%' }} />
				<button onClick={this.addTodo}>Submit</button>
			</div>
		);
	}
}
