import React from 'react';
import login2 from '../../../images/Login/login2.png';
import { useForm } from "react-hook-form";
import './Login.css';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const { auth, user, setUser, signInWithEmailAndPassword, signInUsingGoogle, error, setError, setIsLoading } = useAuth();
    // console.log(user)

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log(redirect_uri)

    const { register, handleSubmit } = useForm();
    // Login using email and pass
    const onSubmit = data => {
        // console.log(data)
        setIsLoading(true)
        const email = data.email;
        const pass = data.password;
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // handle google sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setError('')
                history.push(redirect_uri)

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-md-6">
                    <img src={login2} alt="" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column login-form">
                        <h2>Please Login</h2>
                        <input placeholder="Email" {...register("email", { required: true })} className="mb-2 p-1" />
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="mb-2 p-1" />
                        <p><small>{error}</small></p>
                        <input type="submit" value="Login" />
                        <p>New to TravelBea? <Link to="/signup">Create Account</Link> </p>
                        <span className="text-center mt-3">Or Login With</span>
                        <Button variant="primary" onClick={handleGoogleSignIn}>Google</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;