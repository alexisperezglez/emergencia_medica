import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';


class AuthRouter extends React.Component {

    verifyToken = () => {
        let accessToken = localStorage.getItem('bearer_token');

        if (accessToken) {

            const { exp } = decode(accessToken);

            if (Date.now() > exp * 1000) {
                localStorage.removeItem('bearer_token');
                // window.location.href = '/';
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    render() {
        const { component, ...rest } = this.props;
        const validToken = this.verifyToken();
        return (
            <span>
                { validToken ? (
                    <Route path={rest.path} component={component} />
                ) : (
                    <Route path={rest.path}>
                        <Redirect to='/login'/>
                    </Route>
                )}
            </span>
        );
    }
}

export default AuthRouter;