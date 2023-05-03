// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const provider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // Call SignIn
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle(provider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='grid grid-cols-1'>
            <form onSubmit={handleLogin}>
                <div className="hero border-gray-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Please Login</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <p><small>Don't Have an Account? Please <Link className='text-blue-500' to='/register'>Register</Link></small></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className='flex justify-center items-center my-auto'>
                <button onClick={handleGoogleLogin} className="btn btn-outline"><FaGoogle></FaGoogle>SignIn With Google</button>
                <br />
                <button className="btn btn-outline"><FaGithub></FaGithub>SignIn With Github</button>
            </div>
        </div>
    );
};

export default Login;