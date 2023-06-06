import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PrivateRoute() {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate=useNavigate()
  return userInfo ? navigate('/profile') :navigate('/login')
}

export default PrivateRoute
