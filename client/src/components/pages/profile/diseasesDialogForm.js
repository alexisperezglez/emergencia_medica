import React from 'react';
import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
import DiseasesForm from './diseasesForm';

class DiseasesDialogForm extends React.Component {

    /* handleSubmit = (payload) => {
        console.log('PAYLOAD: ', payload);
        console.log('PROPS: ', this.props);
        const {
            handleSubmitForm
        } = this.props.handleSubmitForm;
        handleSubmitForm(payload);
    }; */

    render() {
        const { onHideDialog, initialValues, handleSubmitForm } = this.props;
        /* const footer = (<div>
                            <Button label="Yes" icon="pi pi-check" onClick={() => onHideDialog()} />
                            <Button label="No" icon="pi pi-times" onClick={() => onHideDialog()} />
                        </div>); */
        return (
            <Dialog header="Nuevo" modal={true} style={{width: '50vw'}} visible={this.props.visible} onHide={() => onHideDialog()} >
                <DiseasesForm onSubmit={handleSubmitForm} initialValues={initialValues} />
            </Dialog>
        );
    }
}

export default DiseasesDialogForm;