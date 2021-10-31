import React from 'react';
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import error from '../../images/404.jpg';

const NotFound = () => {
    let history = useHistory()
    const handleBackHome = () => {
        history.push("/home")
    }
    return (
        <div className="overflow-hidden">
            <div className="row error-container d-flex align-items-center">
                <div className="col-md-6 px-5">
                    <h1 className="error-title">Oops! The page you are looking for is not available</h1>
                    <Button onClick={handleBackHome} className="btn btn-danger mb-3">Back to Home</Button>
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={error} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;