import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
	getStyle = () => {
		/*
		if(this.props.todo.completed){
			return {
				textDecoration: 'line-through'
			}
		}
		else{
			return {
				textDecoration: 'none'
			}
		}
		*/
		//Use ternary operator
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 
			'line-through' : 'none'
		}
	}

		//Double braces for inline css
		//<div style={{ backgroundColor: '#f4f4f4' }} >

	render(){
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" />
					{ this.props.todo.title }
				</p>
			</div>
		)
	}
}

//Proptypes
TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
}

/*
const itemStyle = {
	//backgroundColor: '#f4f4f4'
	backgroundColor: '#f4f4f4'
}
*/

export default TodoItem;