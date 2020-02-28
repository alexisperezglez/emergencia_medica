import React from 'react';
import Loginform from './loginform';

class Login extends React.Component {
    render() {
        return(
            <section className="banner_part" >
                <div className="container" >
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-xl-6" >
                            <div className="banner_text" >
                                <div className="banner_text_iner" >
                                    <h1 > Login </h1>
                                    <Loginform autenticacion={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Login;