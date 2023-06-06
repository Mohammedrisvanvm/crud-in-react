import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { ToastContainer } from "react-toastify";
import ProfileScreen from "./screens/profileScreen";
import PrivateRoute from "./components/privateRoute";
import AdminHomeScreen from "./screens/adminHomeScreen";
import AdminEditScreen from "./screens/AdminEditScreen";


function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="" element={<PrivateRoute/>} >
          <Route path="/profile" element={<ProfileScreen/>} />
          </Route>
        <Route path="/admin" element={<AdminHomeScreen/>} />
        <Route path="/admin/editUser/:id" element={<AdminEditScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
