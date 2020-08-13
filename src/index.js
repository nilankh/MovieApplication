import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
// import movies from "./reducers";
import rootReducer from "./reducers";

// it accepts an argument and we will pass an argument as a reducer
const store = createStore(rootReducer);
console.log("store", store);
// console.log('BeforeState', store.getState())

// //DISPATCHING THE ACTIONS
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })
// console.log('AfterState', store.getState())

ReactDOM.render(<App store={store} />, document.getElementById("root"));
