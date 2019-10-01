import React from 'react';
import { Link } from 'react-router-dom';

//Object component have different lifecyle methods, render, component didmount etc

//Functional  just one return that works like render 
function Header() {
	return(
		<header style={headerStyle}>
			<h1>TodoList</h1>
			<Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
		</header>
	)

}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

//Use className and css file if you dont want to declare you styles in the js file
const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}

export default Header;