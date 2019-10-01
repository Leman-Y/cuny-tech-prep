import React, { Component } from 'react'

export class AddTodo extends Component {
	state = {
		title: ''
	}
	//any JavaScript expression as a prop, by surrounding it with {}
	//Note: To embed any kind of Javascript expression/variable/object in JSX you need curly braces.

	//Component state
	//But if component state is shared like the todos with app.js. You would use redux
	//State will be continually updated as you update the text in the placeholder
	onChange =(e) => this.setState({title: e.target.value});

	render() {
		return (
			<form style={{display: 'flex'}}>
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

export default AddTodo;