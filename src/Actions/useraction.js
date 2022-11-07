import axios from "axios";
import env from "react-dotenv";
import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  EMAIL_SAVE,
} from "../Constant/usercontant";

const server_root = process.env.BASE_URL_SERVER;
const loginendpoint = "userlogin";
const registrationendpoint = "usersignup";

export const login = (data, callback) => {
  const request = axios.post(server_root + loginendpoint, data);
  return (dispatch) => {
    request
      .then((res) => {
        callback(res);
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        callback(error);
      });
  };
};

export const register = (data, callback) => {
  const request = axios.post(server_root + registrationendpoint, data);
  return (dispatch) => {
    request
      .then((res) => {
        callback(res);
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        callback(error);
      });
  };
};

export const emailstore = (email) => {
  //console.log(email);
  return (dispatch) => {
    dispatch({
      type: EMAIL_SAVE,
      payload: email,
    });
  };
};
