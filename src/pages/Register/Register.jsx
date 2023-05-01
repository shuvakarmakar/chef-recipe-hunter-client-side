// eslint-disable-next-line no-unused-vars
import React from 'react';

const Register = () => {
    return (
        <form className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder='Your Name'
                    required
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                    Email
                </label>
                <input
                    type="email" name="email" placeholder='Your Email'
                    required
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder='Your Password'
                    required
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="inline-block w-full px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Register
                </button>
            </div>
            {/* <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p> */}
        </form>
    );
};

export default Register;