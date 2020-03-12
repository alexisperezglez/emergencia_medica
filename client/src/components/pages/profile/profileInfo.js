import React from 'react';
import { connect } from 'react-redux';
import { fetchProfileThunk, updateProfileThunk } from '../../../thunks/profileInfothunk';
import { toggleVisibleDialog, profileInitialValues } from '../../../actions/profileInfoActions';
import ProfileInfoDialogForm from './profileInfoDialogForm';
import ProfileInfoForm from './profileInfoForm';

class ProfileInfo extends React.Component {

    componentDidMount = () => {
        const {fetchProfileThunk} = this.props;
        fetchProfileThunk();
    }

    onHideDialog = () => {
        const { toggleVisibleDialog } = this.props;
        toggleVisibleDialog(false);
    }

    onShowDialog = () => {
        const { toggleVisibleDialog } = this.props;
        toggleVisibleDialog(true);
    }

    handleSubmitForm = (payload) => {
        console.log('PAYLOAD: ', payload);
        const { updateProfileThunk } = this.props;
        updateProfileThunk(payload);
    }

    render() {
        const {data, initialValues, visible} = this.props;
        let values = {};
        if(data.user) {
            const {id, ci, name, lastname, username, email} = data.user;
            values = {
                id,
                ci,
                name,
                lastName: lastname,
                username,
                email,
                address: data.user.profile ? data.user.profile.address : undefined,
            };
        }

        console.log('DATA: ', data);
        console.log('INITIALVALUES: ', initialValues);
        return(
            <div>
                <h3>Informacion General <button className="btn_1" style={{padding: '0px 6px'}} onClick={() => this.onShowDialog()} title="Editar"><i className='ti-pencil-alt'></i></button></h3>
                <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAKsSURBVO3BQW7sWAwEwSxC979yjpdcPUCQ2t/NYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4TepdEnoVO5IQqfSJeE3qTxRrFGKNUqxRrl4mcqbknCicpKEE5U7VN6UhDcVa5RijVKsUS4+LAl3qDyRhN+UhDtUPqlYoxRrlGKNcvHlktCpdEnoVLokdCrfrFijFGuUYo1yMZzK/0mxRinWKMUa5eLDVP6lJJyoPKHylxRrlGKNUqxRLl6WhL9MpUtCp3KShL+sWKMUa5RijXLxkMo3ScIdKt+kWKMUa5RijXLxUBI6lTuS0Kl0SbgjCZ1Kl4ROpUvCm1ROktCpPFGsUYo1SrFGiT/4oCR0Kl0STlS6JDyh0iWhU7kjCU+ovKlYoxRrlGKNcvFQEjqVkyR0KidJOFG5IwmdSpeEE5UTlZMkfFKxRinWKMUaJf7gRUl4k0qXhBOVLgmdykkSOpVvUqxRijVKsUa5eCgJJypdEk5UuiR0KneonCShUzlJQqdyRxI6lTcVa5RijVKsUeIPvlgSOpUuCZ3KSRLepNIloVN5U7FGKdYoxRrl4qEk/CaVJ5LQqXQqXRI6lS4Jf0mxRinWKMUa5eJlKm9KwolKl4QTlZMkdCpdEk5U/qVijVKsUYo1ysWHJeEOlTuS0Kl0SThJwh0qT6h8UrFGKdYoxRrl4supdEm4Q+WJJJyodEk4UXmiWKMUa5RijXIxjEqXhC4JncodSXhC5ZOKNUqxRinWKBcfpvKbktCpdEk4SUKn0qn8ZcUapVijFGuUi5cl4Tcl4Ykk3JGEE5U7ktCpPFGsUYo1SrFGiT9YYxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGuU/oMIB+nWTl0QAAAAASUVORK5CYII="></img>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3>Nombre:</h3>
                                <p>{data.user ? data.user.name : ''} {data.user ? data.user.lastname : ''}</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>Correo:</h3>
                                <p>alexisperezglez@gmail.com</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3>Usuario</h3>
                                <p>admin</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-credit-card"></i></span>
                            <div className="media-body">
                                <h3>CI:</h3>
                                <p>88020717940</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-unlock"></i></span>
                            <div className="media-body">
                                <h3>Rol:</h3>
                                <p>Administrador</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-location-pin"></i></span>
                            <div className="media-body">
                                <h3>Direccion</h3>
                                <p>falgueras #222, Cerro. La Habana, Cuba.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ProfileInfoDialogForm onHideDialog={this.onHideDialog} visible={visible} >
                    <ProfileInfoForm onSubmit={this.handleSubmitForm} initialValues={values} />
                </ProfileInfoDialogForm>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {profileInfo, form} = state;
    return {
        ...ownProps,
        ...profileInfo,
        form
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        fetchProfileThunk: () => dispatchEvent(fetchProfileThunk()),
        toggleVisibleDialog: (val) => dispatchEvent(toggleVisibleDialog(val)),
        updateProfileThunk: (payload) => dispatchEvent(updateProfileThunk(payload)),
        profileInitialValues: (payload) => dispatchEvent(profileInitialValues(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);