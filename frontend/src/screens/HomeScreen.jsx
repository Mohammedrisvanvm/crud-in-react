import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Hero from "../components/Hero";
import LoggedinScreen from "../components/loggedinScreen";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomeScreen() {
  const { user } = useSelector((state) => state);

  console.log(user);

  return (
    <>
      {user ? <Header/> : <Header />}
      {user ? <LoggedinScreen /> : <Hero />}
    </>
  );
}

export default HomeScreen;
