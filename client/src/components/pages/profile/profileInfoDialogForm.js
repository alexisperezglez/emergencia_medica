import React from 'react';
import { Dialog } from 'primereact/dialog';

class ProfileInfoDialogForm extends React.Component {

    render() {
        const { onHideDialog, visible, children} = this.props;
        return (
            <Dialog header="Nuevo" modal={true} style={{width: '50vw'}} visible={visible} onHide={() => onHideDialog()} >
                {children}
            </Dialog>
        );
    }
}

export default ProfileInfoDialogForm;