import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../../customInputsForm/customInput';
import { connect } from 'react-redux';

const style = {
    clear: 'both',
    border: 'none'
}

class ProfileInfoForm extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            initialValues: {},
        }
    }

    componentDidUpdate() {
        if(this.props.initialValues) {
            const { initialValues } = this.props;
            this.setState({initialValues})
        }
    } */
    render() {
        const { handleSubmit, initialValues } = this.props;
        console.log('***************', initialValues);
        return (
            <form onSubmit={handleSubmit}>
                <Field name="id" component="input" type="hidden" />
                <Field name="name" component={CustomInput} placeholder="Nombre" label='Nombre:'/>
                <Field name="lastName" component={CustomInput} placeholder="Apellidos" label='Apellidos:'/>
                <Field name="ci" component={CustomInput} placeholder="Carnet Identidad" label='Carnet Identidad:'/>
                <Field name="email" component={CustomInput} placeholder="Correo Electronico" label='Correo Electronico:'/>
                <Field name="address" component={CustomInput} placeholder="Direccion" label='Direccion:'/>
                <button type="submit" className="button button-contactForm btn_1" style={{float: 'right'}}>Registrar</button>
                <hr style={style} />
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Campo obligatorio';
    }
    if (!values.lastName) {
        errors.lastName = 'Campo obligatorio';
    }
    if (!values.ci) {
        errors.ci = 'Campo obligatorio';
    }
    if (!values.email) {
        errors.email = 'Campo obligatorio';
    }
    if (!values.address) {
        errors.address = 'Campo obligatorio';
    }

    return errors;
}

const mapStateToProps = (state, ownProps) => {
    console.log('STATE: ', state);
    console.log('OWNPROPS: ', ownProps);
    return {
        initialValues: {}
    }
}

export default reduxForm({
    form: 'profileInfo',
    validate,
    enableReinitialize: true,
})(ProfileInfoForm);