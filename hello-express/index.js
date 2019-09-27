
const express = require('express')
const app = express()
const port = 8000

//node_modules/nodemonin/nodemon.js index.js to run nodemon manually

/*
app.get('/', (req, res) => { //Request and response
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
*/



//Listen starts the server
app.listen(port, () => {
  //console.log(`Example app listening on port ${port}!`);
});



const STUDENTS = {
  123: {
    name: 'Cindy',
    grade: 'A',
  } ,
  124: {
    name: 'Hector',
    grade: 'B+',
  },
  127: {
    name: 'Alex',
    grade: 'F',
  }
};

app.get('/', (req, res) => { //Request and response
  res.send('Hello World!')
});

app.get('/students', (req, res) => {
  res.json(STUDENTS);
});

app.get('/students/:id', (req, res) => {
  let sId = Number(req.params.id);
  res.json(STUDENTS[sId] || {});
});



