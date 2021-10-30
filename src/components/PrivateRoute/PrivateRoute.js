import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-3">
                <div><Spinner animation="border" variant="warning" /></div>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? children
                    :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;