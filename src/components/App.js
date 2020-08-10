import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // we have to subsribe to make changes
    this.forceUpdate();//forcefully updating the app component to render
    store.subscribe(() => {
      console.log("UPDATED");
    });
    // in real word wwe make api call
    // dispatch the action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }

  render() {
    const movies = this.props.store.getState();
    console.log("RENDER")
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
