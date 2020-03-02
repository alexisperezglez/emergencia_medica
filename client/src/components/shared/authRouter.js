import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthRouter extends React.Component {
    render() {
        const { component, ...rest } = this.props;
        const bearer_token = localStorage.getItem('bearer_token');
        return (
            <span>
                { bearer_token ? (
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