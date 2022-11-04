import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import auth from "../Mycomponents/Reducers/index";

const configureStore = () => {
  return createStore(auth, compose(applyMiddleware(thunk)));
};

export default configureStore;
