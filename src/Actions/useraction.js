import axios from "axios";
import env from "react-dotenv";
import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
} from "../Constant/usercontant";

const server_root = process.env.BASE_URL_SERVER;

export const login = (data, callback) => {
  const request = axios.post(`http://localhost:4000/userlogin`, data);
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
  const request = axios.post(`http://localhost:4000/usersignup`, data);
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
