import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getLoginState } from "../../store/actions/exporterActions";

const Login = ({ history }) => {
  const clientID = "e0766f48a0ed436d36d4";
  const clientSecret = "aaffe151d27e8adefdebac55afc88d74dfac5590";
  const callBackUrl = window.location.href;
  const code = callBackUrl.substring(callBackUrl.indexOf("=") + 1);
  const dispatch = useDispatch();

  const getAccessToken = () => {
    axios({
      method: "POST",
      url: "/api/login/oauth/access_token",
      data: {
        client_id: clientID,
        client_secret: clientSecret,
        code,
      },
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setAccessToken(res.data["access_token"]);
      })
      .catch((err) => console.log(err));
  };
  const setAccessToken = (token) => {
    axios({
      method: "POST",
      url: "http://10.153.4.240:8000/user/login",
      data: {
        token: token,
      },
    })
      .then((res) => {
        sessionStorage.setItem("access_token", res.data.access_token);
        dispatch(getLoginState(true));
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  getAccessToken();

  return <div></div>;
};

export default Login;