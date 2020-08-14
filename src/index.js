import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
// import movies from "./reducers";
import rootReducer from "./reducers";

// function logger(obj, next, action)
// logger(obj)(next)(action)
// next is used to refer another middleware
const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // middleware code
      console.log("ACTION_TYPE =", action.type);
      next(action);
    };
  };
};

// it accepts an argument and we will pass an argument as a reducer
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store);
// console.log('BeforeState', store.getState())

// //DISPATCHING THE ACTIONS
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })
// console.log('AfterState', store.getState())

ReactDOM.render(<App store={store} />, document.getElementById("root"));
