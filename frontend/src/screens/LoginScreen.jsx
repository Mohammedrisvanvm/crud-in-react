import React, { useEffect } from "react";
import Header from "../components/header";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};

export default LoginScreen;
