import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../../customInputsForm/customInput';
import CustomPasswordInput from '../../customInputsForm/customPasswordInput';

class RegistryForm extends React.Component {

    render() {

        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit}>
                <Field name="name" component={CustomInput} placeholder="Nombre" label='Nombre:'/>
                <Field name="lastName" component={CustomInput} placeholder="Apellido" label='Apellido:'/>
                <Field name="email" component={CustomInput} placeholder="Correo Electronico" label='Correo Electronico:'/>
                <Field name="ci" component={CustomInput} placeholder="Carnet de Identidad" label='Carnet de Identidad:'/>
                <Field name="username" component={CustomInput} placeholder="usuario" label='Nombre de Usuario:'/>
                <Field name="password" component={CustomPasswordInput} placeholder="Contrasena" label='Contrasena:'/>
                <Field name="repeatPassword" component={CustomPasswordInput} placeholder="Repetir Contrasena" label='Repetir Contrasena:'/>
                <button type="submit" className="button button-contactForm btn_1" style={{float: 'right'}}>Registrar</button>
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