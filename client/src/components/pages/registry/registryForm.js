import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'primereact/button';
import CustomInput from '../../customInputsForm/customInput';

class RegistryForm extends React.Component {

    render() {

        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit}>
                <Field name="name" component={CustomInput} placeholder="Nombre"/>
                <Field name="lastName" component={CustomInput} placeholder="Apellido"/>
                <Field name="email" component={CustomInput} placeholder="Correo Electronico"/>
                <Field name="ci" component={CustomInput} placeholder="Carnet de Identidad"/>
                <Field name="username" component={CustomInput} placeholder="usuario"/>
                <Field name="password" component={CustomInput} placeholder="Contrasena"/>
                <Field name="repeatPassword" component={CustomInput} placeholder="Repetir Contrasena"/>
                <button type="submit" className="button button-contactForm btn_1">Registrar</button>
                {/* <Button label="Registrar" onClick={this.handleSubmit}/> */}
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
    if (!values.email) {
        errors.email = 'Campo obligatorio';
    }
    if (!values.ci) {
        errors.ci = 'Campo obligatorio';
    }
    if (!values.username) {
        errors.username = 'Campo obligatorio';
    }
    if (!values.password) {
        errors.password = 'Campo obligatorio';
    }
    if (!values.repeatPassword) {
        errors.repeatPassword = 'Campo obligatorio';
    } else if (values.password !== values.repeatPassword) {
        errors.repeatPassword = 'Las contraseñas no coinciden';
    }

    return errors;
}

export default reduxForm({
    form: 'user',
    validate,
})(RegistryForm);