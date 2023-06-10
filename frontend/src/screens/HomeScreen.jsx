import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Hero from "../components/Hero";
import LoggedinScreen from "../components/loggedinScreen";
import { setCredentials } from "../slices/AuthSlice";

function HomeScreen() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userinfo"));

    dispatch(setCredentials(storedUserInfo));
  }, []);
  console.log(userInfo);
  return (
    <>
      {userInfo ? <Header session={true} /> : <Header session={false} />}
      {userInfo ? <LoggedinScreen /> : <Hero />}
    </>
  );
}

export default HomeScreen;
