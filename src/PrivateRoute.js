import React, { useContext } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { UserContext } from './userContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const navigate= useNavigate();
    const { isLoggedIn } = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? <Component {...props} /> : <navigate to="/" />
            }
        />
    );
};
export default PrivateRoute;