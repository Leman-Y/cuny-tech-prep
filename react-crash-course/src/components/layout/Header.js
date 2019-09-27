import React from 'react';

//Object component have different lifecyle methods, render, component didmount etc

//Functional  just one return that works like render 
function Header() {
	return(
		<header style={headerStyle}>
			<h1>TodoList</h1>
		</header>
	)

}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

export default Header;