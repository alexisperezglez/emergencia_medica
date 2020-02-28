import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

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
    if (this.props.autenticacion == true) {
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
    return (
      <form>
        <div className="input-group mb-3">
          <span className="p-float-label" style={{ width: '100%' }}>
            <InputText
              id="email"
              value={this.state.email}
              style={{ width: '100%' }}
              onChange={this.onChangeEmail}
            />
            <label htmlFor="email">Correo Electr&oacute;nico</label>
          </span>
        </div>
        <div className="input-group mb-3">
          <span className="p-float-label" style={{ width: '100%' }}>
            <Password
              id="password"
              value={this.state.password}
              style={{ width: '100%' }}
              onChange={this.onChangePassword}
              promptLabel="Ingrese su Contrase&ntilde;a"
              weakLabel="D&eacute;bil"
              mediumLabel="Media"
              strongLabel="Fuerte"
            />
            <label htmlFor="password">Contrase&ntilde;a</label>
          </span>
        </div>
        <div className="row">
          <div className="col-12">
            <Checkbox
              inputId="cb1"
              checked={this.state.checked}
              onChange={this.onChangeChecked}
            ></Checkbox>
            <label htmlFor="cb1" className="p-checkbox-label">
              Recordarme
            </label>
          </div>
          <br />
          <br />
          <div className="col-12">
            <Button
              label="Entrar"
              icon="pi pi-sign-in"
              style={{ width: '100%', paddingBottom: '5px' }}
              onClick={this.onLogin}
            />
            <br />
            <br />
            <Button
              label="Entrar con Google"
              icon="pi pi-google"
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <Button
              label="Entrar con Facebook"
              icon="ti-facebook"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Loginform;