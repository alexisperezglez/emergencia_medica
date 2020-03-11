import React from 'react';
import { connect } from 'react-redux';
import { fetchProfileThunk } from '../../../thunks/profileInfothunk';
import { toggleVisibleDialog } from '../../../actions/profileInfoActions';
import ProfileInfoDialogForm from './profileInfoDialogForm';

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
        const { addAilmentsThunk } = this.props;
        addAilmentsThunk(payload);
    }

    render() {
        return(
            <div>
                <h3>Informacion General <button className="btn_1" style={{padding: '0px 6px'}} onClick={() => this.onShowDialog()} title="Editar"><i className='ti-pencil-alt'></i></button></h3>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3>Nombre:</h3>
                                <p>Alexis Osmany Perez</p>
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
                <ProfileInfoDialogForm onHideDialog={this.onHideDialog} visible={this.props.visible} initialValues={{id: 1}} handleSubmitForm={this.handleSubmitForm} />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);