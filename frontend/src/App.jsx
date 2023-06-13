import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { ToastContainer } from "react-toastify";
import ProfileScreen from "./screens/profileScreen";
import AdminHomeScreen from "./screens/adminHomeScreen";
import AdminEditScreen from "./screens/AdminEditScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;

  const { user, admin, refresh } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      let { data } = await axios.get("/users/userCheck");
      dispatch({
        type: "user",
        payload: { login: data.loggedIn, details: data.user },
      });
      let { data: adminData } = await axios.get("/admin/adminCheck");
      dispatch({ type: "admin", payload: { login: adminData.loggedIn } });
    })();
  }, [refresh]);
  return (
    <div>
      <ToastContainer />
      <Router>
        <div className="App">
          {user.login === false && (
            <Routes>
              <Route path="/login" element={<LoginScreen />}></Route>
              <Route path="/register" element={<RegisterScreen />}></Route>
              <Route
                path="/"
                element={<Navigate to="/login" replace={true} />}
              ></Route>
              <Route
                path="/profile"
                element={<Navigate to="/login" replace={true} />}
              ></Route>
            </Routes>
          )}
          {user.login === true && (
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route path="/profile" element={<ProfileScreen />}></Route>
              <Route
                path="/login"
                element={<Navigate to="/" replace={true} />}
              ></Route>
              <Route
                path="/register"
                element={<Navigate to="/" replace={true} />}
              ></Route>
            </Routes>
          )}
          {admin.login === true && (
            <Routes>
              <Route path="/admin" element={<AdminHomeScreen />}></Route>
              <Route
                path="/admin/register"
                element={<RegisterScreen />}
              ></Route>
              <Route
                path="/admin/editUser/:id"
                element={<AdminEditScreen />}
              ></Route>
              <Route
                path="/admin*"
                element={<Navigate to="/admin/" replace={true} />}
              ></Route>
            </Routes>
          )}
          {admin.login === false && (
            <Routes>
              <Route path="/admin/login" element={<AdminLoginScreen />}></Route>
              <Route
                path="/admin*"
                element={<Navigate to="/admin/login" replace={true} />}
              ></Route>
            </Routes>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
