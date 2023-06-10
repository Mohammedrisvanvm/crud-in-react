import React, { useEffect } from "react";
import Header from "../components/header";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  });
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};

export default LoginScreen;
