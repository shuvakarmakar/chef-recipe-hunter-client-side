// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    // Import user and logout from AuthProvider
    const { user, logOut } = useContext(AuthContext);

    const handleSignout = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        </label>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Japanese Cuisine</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/chefs'>Chefs</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        {user ?
                        <li><button onClick={handleSignout} className='btn btn-secondary'>Logout</button></li> :
                        <li><button className='btn btn-accent'><Link to="/login">Login</Link></button></li>}

                        {/* <button className='btn btn-primary'><Link to="/register">Register</Link></button> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;