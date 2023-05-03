// eslint-disable-next-line no-unused-vars
import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import html2pdf from 'html2pdf.js';

const Header = () => {
    // Import user and logout from AuthProvider
    const { user, logOut } = useContext(AuthContext);

    const handleSignout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const handleDownloadPDF = () => {
        html2pdf()
          .from(document.querySelector('#pdf-container'))
          .save();
      };

    return (
        <div>
            < div >
                <div className="navbar bg-sky-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">Japanese Cuisine</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-end">
                        {user ?
                            <>
                                <li><button onClick={handleDownloadPDF} className='btn btn-secondary'>Download PDF</button></li>
                                <li><button onClick={handleSignout} className='btn btn-secondary'>Logout</button></li></> :
                            <li><button className='btn btn-accent'><Link to="/login">Login</Link></button></li>}
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Header;