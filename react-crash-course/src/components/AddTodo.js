import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
	state = {
		title: ''
	}
	//any JavaScript expression as a prop, by surrounding it with {}
	//Note: To embed any kind of Javascript expression/variable/object in JSX you need curly braces.

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title: ''})
	}

	//Component state
	//But if component state is shared like the todos with app.js. You would use redux
	//State will be continually updated as you update the text in the placeholder
	onChange =(e) => this.setState({ [e.target.name]: e.target.value});

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{display: 'flex'}}>
				<input 
					type="text" 
					name="title" 
					placeholder="Add Todo ..." 
					style={{flex: '10', padding: '5px'}}
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input type="submit" value="Submit" className="btn" style={{flex: '1'}}/> 
			</form>

		)
	}

}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
}


export default AddTodo;