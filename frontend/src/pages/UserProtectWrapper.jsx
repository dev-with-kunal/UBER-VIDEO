import React, { useEffect, useState, useContext } from 'react';
import { userDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(!token){
            navigate('/login');
        }
       }, [token]);

       return (<>{children}</>)
}
export default UserProtectWrapper;