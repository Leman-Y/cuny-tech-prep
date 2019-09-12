import React from 'react'
import ReactDOM from 'react-dom'



function Student(props) {
  return <div>- { props.name } is in class</div>;
}

function Welcome() {
  return (
    <div>
      <h1>Welcome CTP Class</h1>
      <p>Who is in class?</p>
      <Student name="Sally" />
      <Student name="Bob" />
      <Student name="Fergie"/>
    </div>
  );
}


ReactDOM.render(
  <Welcome />,
  document.getElementById("root")
);


