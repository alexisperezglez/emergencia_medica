import React from 'react';
import {connect} from 'react-redux';
import RegistryForm from './registryForm';
import registrythunk from '../../../thunks/registrythunk';
import { Redirect } from 'react-router-dom';
import Container from '../../shared/container';

class Registry extends React.Component {

    handleSubmit = (payload) => {
        console.log('PAYLOAD: ', payload);
        const { registrythunk } = this.props;
        registrythunk(payload);
    };

    render() {
        console.log('RENDER_PROPS: ', this.props);
        return(
            <Container title="Registro">
                {this.props.registred ? <Redirect to="/login"/> : (
                    <div className="col-lg-12 col-xl-12">
                        <RegistryForm onSubmit={this.handleSubmit}/>
                    </div>
                )}
            </Container>
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
};

const mapDispatchToProps = (dispatchEvent) => {
    return {
        registrythunk: (payload) => dispatchEvent(registrythunk(payload)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registry);
