// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    // Load User from AuthProvider
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;