// "use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }
// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Iva';

// {
//     var result = 50;
// }

// console.log(result);

let numberOfFilms = +promt ("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

const a = promt('Один из последних просмотренных фильмов?', ''),
      b = promt('На сколько оцените его?', ''),
      c = promt('Один из последних просмотренных фильмов?', ''),
      d = promt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

