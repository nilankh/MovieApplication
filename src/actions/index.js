// action is just a way to telling a store i want to do something

// {
// type: 'ADD_MOVIES',
// movies: [m1, m2, m3]
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";

// actions creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}
