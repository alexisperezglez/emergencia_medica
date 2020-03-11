import React from 'react';
import { Dialog } from 'primereact/dialog';
import ProfileInfoForm from './profileInfoForm';

class ProfileInfoDialogForm extends React.Component {
    render() {
        const { onHideDialog, initialValues, handleSubmitForm } = this.props;
        return (
            <Dialog header="Nuevo" modal={true} style={{width: '50vw'}} visible={this.props.visible} onHide={() => onHideDialog()} >
                <ProfileInfoForm onSubmit={handleSubmitForm} initialValues={initialValues} />
            </Dialog>
        );
    }
}

export default ProfileInfoDialogForm;