// action is just a way to telling a store i want to do something

// {
// type: 'ADD_MOVIES',
// movies: [m1, m2, m3]
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";

// actions creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  };
}
