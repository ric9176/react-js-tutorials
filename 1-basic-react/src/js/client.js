import { createStore } from "redux";

const reducer = function (state, action) {
  if (action.type === "INC") {
    return state+action.payload;
  }
  if (action.type === "DEC") {
    return state-action.payload;
  }
  return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 5});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
// import React from "react";
// import ReactDOM from "react-dom";
//
// import Layout from "./components/Layout";
//
// const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);
