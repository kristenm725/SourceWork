/*
Exercise File for Week 1 Source, see Week1.txt for details
*/

/*
These are functions, but why the weird syntax?
*/
const personOne = favoriteFoods => {
  /*insert functionality here*/
};

const personTwo = favoriteMovies => {
  for (let i = 1; i < favoriteMovies.length; i++) {
    console.log(favoriteMovies[i]);
  }
};

const personThree = favoriteAnimals => {
  /*insert functionality here*/
};

/*
What does this variable syntax do?
*/
const favoriteFoods = [],
  favoriteMovies = [],
  favoriteAnimals = [];

const iceBreaker = () => {
  personTwo("titanic", "avengers");
};
