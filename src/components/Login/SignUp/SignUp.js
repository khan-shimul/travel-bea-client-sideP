import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login2 from '../../../images/Login/login2.png';

const SignUp = () => {
    const { auth, setUser, signInUsingGoogle, error, setError, setIsLoading, createUserWithEmailAndPassword, updateProfile } = useAuth();

    const [name, setName] = useState(null);
    // console.log(name)

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log(redirect_uri)

    // Sign Up with email and pass
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const name = data.fullName
        setName(name)
        const email = data.email;
        const pass = data.password;
        // pass validation for 6 character
        if (pass.length < 6) {
            setError('Password should be 6 character')
            return
        }
        // pass validation for 1 special character
        if (!/(?=.*[!@#$&*])/.test(pass)) {
            setError('Password should be one special character')
            return
        }
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                // update user name
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch(error => {
                        setError(error.message)
                    })
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    //  Google sign in
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
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center my-5">
                    <div data-aos="fade-right" className="col-md-6">
                        <img className="img-fluid" src={login2} alt="" />
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column login-form">
                            <h2 className="fw-bold fs-4 mb-3">Create Account</h2>
                            <input placeholder="Full Name" {...register("fullName", { required: true })} className="mb-2 p-3 border rounded-2" />
                            <input placeholder="Email" {...register("email", { required: true })} className="mb-2 p-3 border rounded-2" />
                            <input type="password" placeholder="Password" {...register("password", { required: true })} className="mb-2 p-3 border rounded-2" />
                            <p><small>{error}</small></p>
                            <input type="submit" value="Sign Up" className="btn-login" />
                            <p className="mt-2">Already have an account? <Link to="/login" className="text-decoration-none">Login</Link> </p>
                            <span className="text-center mt-2">Or Login With</span>
                            <hr className="w-25 d-flex mx-auto" />
                            <button className="btn-google" variant="primary" onClick={handleGoogleSignIn}><i className="fab fa-google"></i>  Google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;