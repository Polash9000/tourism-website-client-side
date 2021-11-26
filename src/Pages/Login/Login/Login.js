import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="pb-5 pt-5 mt-5 mb-5">
            <button
                className="btn btn-regular btn-primary"
                onClick={handleGoogleLogin}
            >Sign In with Google</button>
        </div>
    );
};

export default Login;