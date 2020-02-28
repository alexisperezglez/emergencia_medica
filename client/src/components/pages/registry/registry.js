import React from 'react';
import {connect} from 'react-redux';
import RegistryForm from './registryForm';
import mithunk from '../../../thunks/mithunk';
import { Redirect } from 'react-router-dom';

class Registry extends React.Component {

    handleSubmit = (payload) => {
        console.log('PAYLOAD: ', payload);
        const {mithunk} = this.props;
        mithunk(payload);
    }

    render() {
        console.log('RENDER_PROPS: ', this.props);
        return(
            <section className="section_padding">
            {this.props.error ? <Redirect to="/"/> : (
                <div className="container">
                    <div className="row align-items-center"
                        style={{
                        paddingTop: '10px',
                        paddingBottom: '20px',
                        }}>
                        <div className="col-lg-12 col-xl-12">
                            <h1>Registro</h1>
                            <RegistryForm onSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            )}
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('REDUCER_STATE: ', state);
    const {registry, form, ...others} = state;
    return {
        ...ownProps,
        ...registry,
        ...others,
        form,
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        mithunk: (payload) => dispatchEvent(mithunk(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registry);