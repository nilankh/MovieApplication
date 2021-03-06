import React from "react";
import { connect } from "react-redux";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";
// import { StoreContext } from "../index";
// import { connect } from "../index";

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // we have to subsribe to make changes

    // store.subscribe(() => {
    //   console.log("UPDATED");
    //   this.forceUpdate(); //forcefully updating the app component to render
    // });
    // in real word wwe make api call
    // dispatch the action
    this.props.dispatch(addMovies(data));
    // console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      // found a movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val));
  };

  render() {
    const { movies, search } = this.props;
    const { list, favourites, showFavourites } = movies;
    // console.log("RENDER", this.props.store.getState());

    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies To Display </div>
          ) : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

// what data we want from store this callback will tell
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
// i created a connect function and i have told connect function and told i want these properties(jo upar mapStateToProps me defined h)from the store as props inside my app component and whole it will return new componebt which we are exporting in last line connectAppCompoent.......(App) ye jo likhe h iska mtlb h, the component we want all the data as in props(jo mapStateToProps) me defined h
export default connectedAppComponent;
