import React from 'react'


//Need to wrap a element in something for JSX syntax. Div shows up in the DOM so use React.Fragment which is like a ghost div
function About(){
	return(
		<React.Fragment>
			<h1>About</h1>
			<p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
		</React.Fragment> 
	)
}

export default About;