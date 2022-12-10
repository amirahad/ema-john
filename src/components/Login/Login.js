import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();

    // console.log(location.state?.from);
    const redirect_url = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(
                    redirect_url
                )
            })
    }

    return (
        <div className='login-from'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <button
                    onClick={handleGoogleLogin}
                    className="product-button"
                >
                    Google Sign In
                </button>
            </div>
        </div>
    )
}

export default Login
