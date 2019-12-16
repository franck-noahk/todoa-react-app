import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
	getStyle = () => {
		return {
			background     : '#f4f4f4',
			textDecoration : this.props.todo.completed ? 'line-through' : 'none',
			padding        : '10px',
			borderBottom   : '1px #ccc dotted',
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type='checkbox'
						onChange={this.props.markComplete.bind(this, id)}
					/>{' '}
					{this.props.todo.title}
					<button
						style={btnStyle}
						onClick={this.props.delete.bind(this, id)}
					>
						X
					</button>
				</p>
			</div>
		);
	}
}
TodoItem.propTypes = {
	todo : PropTypes.object.isRequired,
};

const btnStyle = {
	background   : '#ff0000',
	color        : '#fff',
	border       : 'none',
	borderRadius : '50%',
	curser       : 'pointer',
	float        : 'right',
	padding      : '5px',
};

export default TodoItem;
