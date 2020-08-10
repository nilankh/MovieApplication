import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import movies from './reducers'


// it accepts an argument and we will pass an argument as a reducer
const store = createStore(movies);
console.log('store', store)
console.log('store', store.getState())


ReactDOM.render(<App />, document.getElementById("root"));
