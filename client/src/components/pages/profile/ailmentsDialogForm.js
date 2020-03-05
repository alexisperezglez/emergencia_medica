import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

class AilmentsDialogForm extends React.Component {
    render() {
        const { onHideDialog } = this.props;
        const footer = (<div>
                            <Button label="Yes" icon="pi pi-check" onClick={() => onHideDialog()} />
                            <Button label="No" icon="pi pi-times" onClick={() => onHideDialog()} />
                        </div>);
        return (
            <Dialog header="Nuevo" modal={true} style={{width: '50vw'}} visible={this.props.visible} footer={footer} onHide={() => onHideDialog()}>
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter 's wedding.
                His beloved son Michael has just come home from the war, but does not intend to become part of his father 's business.
                Through Michael 's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
            </Dialog>
        );
    }
}

export default AilmentsDialogForm;