import React from 'react';
import Loginform from './loginform';
import { connect } from 'react-redux';
import loginthunk from '../../../thunks/loginthunk';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    handleSubmit = (payload) => {
        console.log('LOGIN_PAYLOAD: ', payload);
        const { loginthunk } = this.props;
        loginthunk(payload);
    }

    render() {
        return(
            <section className="banner_part" >
                <div className="container" >
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-xl-6" >
                            <div className="banner_text" >
                                <div className="banner_text_iner" >
                                    <h1> Login </h1>
                                    {this.props.loggedin ? (<Redirect to='/' />) : (<Loginform autenticacion={false} onSubmit={this.handleSubmit} />) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('REDUCER_STATE: ', state);
    const {
        login,
        form,
        ...others
    } = state;
    return {
        ...ownProps,
        ...login,
        ...others,
        form,
    }
};

const mapDispatchToProps = (dispatchEvent) => {
    return {
        loginthunk: (payload) => dispatchEvent(loginthunk(payload)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);