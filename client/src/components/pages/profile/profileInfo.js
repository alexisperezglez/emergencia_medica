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
        const { updateProfileThunk } = this.props;
        updateProfileThunk(payload);
    }

    render() {
        const {data, visible} = this.props;
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

        return(
            <div>
                <h3>Informacion General <button className="btn_1" style={{padding: '0px 6px'}} onClick={() => this.onShowDialog()} title="Editar"><i className='ti-pencil-alt'></i></button></h3>
                <div className="row">
                    <div className="col-lg-3">
                        <img alt="qrcode" src = {data.user ? data.user.qrcode : ''}></img>
                    </div>
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
                                <p>{data.user ? data.user.email : ''}</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-user"></i></span>
                            <div className="media-body">
                                <h3>Usuario</h3>
                                <p>{data.user ? data.user.username : ''}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-credit-card"></i></span>
                            <div className="media-body">
                                <h3>CI:</h3>
                                <p>{data.user ? data.user.ci : ''}</p>
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
                                <p>{data.user && data.user.profile ? data.user.profile.address : ''}</p>
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