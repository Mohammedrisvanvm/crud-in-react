import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Hero from "../components/Hero";
import LoggedinScreen from "../components/loggedinScreen";

function HomeScreen() {
  const [user, setUser] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(storedUserInfo);
  }, []);

  return (
    <>
      <Header />
      {userInfo || user ? <LoggedinScreen /> : <Hero />}
    </>
  );
}

export default HomeScreen;

