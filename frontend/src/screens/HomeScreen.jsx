import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Hero from "../components/Hero";
import LoggedinScreen from "../components/loggedinScreen";
import { setCredentials } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
const navigate=useNavigate()
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userinfo"));

    dispatch(setCredentials(storedUserInfo));
    navigate('/')
  }, []);

  return (
    <>
      {userInfo ? <Header session={true} /> : <Header session={false} />}
      {userInfo ? <LoggedinScreen /> : <Hero />}
    </>
  );
}

export default HomeScreen;
