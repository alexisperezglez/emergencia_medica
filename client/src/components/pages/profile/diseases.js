import React from 'react';
import { getDiseasesThunk, addDiseasesThunk } from '../../../thunks/diseasethunk';
import { toggleVisibleDialog } from '../../../actions/diseasesActions';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DiseasesDialogForm from './diseasesDialogForm';
import { connect } from 'react-redux';

class Diseases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            globalFilter: '',
        }
    }

    componentDidMount() {
        const { getDiseasesThunk } = this.props;
        getDiseasesThunk();
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
        const { addDiseasesThunk } = this.props;
        addDiseasesThunk(payload);
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    render() {
        const { data } = this.props;

        const header = (<div style={{'textAlign':'left'}}>
                            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                            <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Buscar..." size="50"/>
                            <Button type="button" icon="pi pi-plus" iconPos="left" label="Nuevo" onClick={() => this.onShowDialog()} style={{float: 'right'}}></Button>
                        </div>);
        return (
            <div>
                <h3> Listado de Enfermedades </h3>
                <DataTable value={ data } dataKey="id" paginator={true} row={10} responsive={true} emptyMessage="No records found" resizableColumns={true} globalFilter={this.state.globalFilter} header={header} alwaysShowPaginator={false}>
                    <Column field="id" header="ID" style={{width:'5%'}}/>
                    <Column field="name" header="Padecimiento" />
                    <Column field="observations" header="Observaciones" excludeGlobalFilter={true} />
                    <Column field="user.name" header="Usuario"  excludeGlobalFilter={true} />
                    <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                </DataTable>
                <DiseasesDialogForm onHideDialog={this.onHideDialog} visible={this.props.visible} initialValues={{id: 1}} handleSubmitForm={this.handleSubmitForm} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { diseases, form } = state;
    return {
        ...ownProps,
        ...diseases,
        form,
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        getDiseasesThunk: () => dispatchEvent(getDiseasesThunk()),
        addDiseasesThunk: (payload) => dispatchEvent(addDiseasesThunk(payload)),
        toggleVisibleDialog: (val) => dispatchEvent(toggleVisibleDialog(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diseases);