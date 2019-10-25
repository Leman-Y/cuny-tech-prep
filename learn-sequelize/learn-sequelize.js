const { Genre } = require('./models');
const { Movie } = require('./models');

/*
  currently, the genre table only has: Action, Adventure, and Drama
  Add one more Genre.
*/
function insertNewGenre() {
  //Genre.create( { name: "Horror" })
  return Genre.create( {name: "Horror"}, {});
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({ title: "Spiderman", year: 2001});
}

/*
  Return the title of the movie with ID=2
*/
//The then() method returns a Promise. It takes two arguments: callback functions for the success and failure cases of the Promise.
function getMovieWithId2() {
  return Movie.findByPk(2).then(Movie => Movie.title); 
}

/*
  Return an array of all the actor names
*/
function getAllActors() {

}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {

}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {

}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {

}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {

}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};