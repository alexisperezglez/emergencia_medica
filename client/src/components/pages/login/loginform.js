import React from 'react';
import {
  reduxForm,
  Field
}
from 'redux-form';
import CustomInput from '../../customInputsForm/customInput';
import CustomPasswordInput from '../../customInputsForm/customPasswordInput';


class Loginform extends React.Component {
  constructor(){
    super();
    this.state = {
        email: "",
        password: "",
        errors: {}
    }
  }

  componentDidMount(){
    //Si inició sesión y el usuario navega a la página de inicio de sesión, se redirige al dashboard
    if (this.props.autenticacion === true) {
        this.props.history.push("/dashboard");
    }
  }

  onChangeChecked(e) {
    if (e.checked) this.setState({ checked: true });
    else this.setState({ checked: false });
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  onChangePassword(e) {
        this.setState({ password: e.target.value });
  }

  onLogin() {
      this.props.history.push('/');
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" component={CustomInput} placeholder="Usuario" label='Nombre de Usuario:'/>
        <Field name="password" component={CustomPasswordInput} placeholder="Contrasena" label='Contrasena:'/>
        <button type="submit" className="button button-contactForm btn_1" style={{float: 'right'}}>Entrar</button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Campo obligatorio';
  }
  if (!values.password) {
    errors.password = 'Campo obligatorio';
  }

  return errors;
}

export default reduxForm({
  form: 'login',
  validate,
})(Loginform);