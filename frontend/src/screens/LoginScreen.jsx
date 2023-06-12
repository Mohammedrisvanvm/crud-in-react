import React, { useEffect } from "react";
import Header from "../components/header";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const {userInfo} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(userInfo);
    if (userInfo !==null) navigate("/");
  },[]);
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};

export default LoginScreen;
