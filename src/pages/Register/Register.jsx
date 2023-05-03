// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log(name, email, password, photo);

        // Validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please Add at least one UpperCase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please Add at least Two Number');
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 charecter in your password')
            return;
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                setSuccess('User has created successfully');
            })
            .catch((error) => {
                console.log(error);
            });


    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-3">Please Register</h1>
            <form onSubmit={handleRegister} className="max-w-md mx-auto">
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
                <div className="mb-4">
                    <label htmlFor="photoUrl" className="block mb-2 font-bold text-gray-700">
                        Photo Url
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder='Photo Url'
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
                <p><small>Already Have an Account? Please <Link className='text-blue-500' to='/login'>Login</Link></small></p>
                <p className='text-error font-bold text-lg'>{error}</p>
                <p className='text-success font-bold text-lg'>{success}</p>
            </form>
        </div>
    );
};

export default Register;