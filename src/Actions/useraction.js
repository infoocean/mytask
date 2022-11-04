import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
} from "../Constant/usercontant";
import axios from "axios";

export const login = (data, callback) => {
  console.log(data);
  const request = axios.post(
    `https://mytaskbackendserver.herokuapp.com/userlogin`,
    data
  );
  return (dispatch) => {
    request
      .then((res) => {
        callback(res);
        console.log(res);
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
  console.log(data);

  const request = axios.post(
    "https://mytaskbackendserver.herokuapp.com/usersignup",
    data
  );
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
        // apiErrors(error);
        callback(error);
      });
  };
};

export function getEmail(data, callback) {}
