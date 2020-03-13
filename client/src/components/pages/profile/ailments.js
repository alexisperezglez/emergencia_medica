import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';
import {getAilmentsThunk, addAilmentsThunk, removeAilmentThunk} from '../../../thunks/ailmentthunk';
import AilmentsDialogForm from './ailmentsDialogForm';
import { toggleVisibleDialog, changeInitialValues } from '../../../actions/ailmentsActions';

class Ailments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            globalFilter: '',
        }
    }

    componentDidMount() {
        const { getAilmentsThunk } = this.props;
        getAilmentsThunk();
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
        const { addAilmentsThunk } = this.props;
        addAilmentsThunk(payload);
    }

    removeAilment = (id) => {
        const { removeAilmentThunk } = this.props;
        removeAilmentThunk(id);
    }

    editAilment = (data) => {
        const {name, observations} = data;
        const {changeInitialValues} = this.props;
        changeInitialValues({ailment: name, observations});
    }

    actionTemplate = (rowData, column) => {
        const { id } = rowData;
        return (<div>
                    <Button type="button" icon="pi pi-trash" className="p-button-success" style={{marginRight: '.5em'}} onClick={() => {this.removeAilment(id)}}></Button>
                    <Button type="button" icon="pi pi-pencil" className="p-button-warning" onClick={() => {this.editAilment(rowData)}}></Button>
                </div>);
    }

    render() {
        const { data, initialValues } = this.props;

        const header = (<div style={{'textAlign':'left'}}>
                            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                            <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Buscar..." size="50"/>
                            <Button type="button" icon="pi pi-plus" iconPos="left" label="Nuevo" onClick={() => this.onShowDialog()} style={{float: 'right'}}></Button>
                        </div>);
        return (
            <div>
                <h3> Listado de Padecimientos </h3>
                <DataTable value={ data } dataKey="id" paginator={true} row={10} responsive={true} emptyMessage="No records found" resizableColumns={true} globalFilter={this.state.globalFilter} header={header} alwaysShowPaginator={false}>
                    <Column field="id" header="ID" style={{width:'5%'}}/>
                    <Column field="name" header="Padecimiento" />
                    <Column field="observations" header="Observaciones" excludeGlobalFilter={true} />
                    <Column field="user.name" header="Usuario"  excludeGlobalFilter={true} />
                    <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                </DataTable>
                <AilmentsDialogForm onHideDialog={this.onHideDialog} visible={this.props.visible} initialValues={initialValues} handleSubmitForm={this.handleSubmitForm} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { ailments, form } = state;
    return {
        ...ownProps,
        ...ailments,
        form,
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        getAilmentsThunk: () => dispatchEvent(getAilmentsThunk()),
        addAilmentsThunk: (payload) => dispatchEvent(addAilmentsThunk(payload)),
        toggleVisibleDialog: (val) => dispatchEvent(toggleVisibleDialog(val)),
        removeAilmentThunk: (id) => dispatchEvent(removeAilmentThunk(id)),
        changeInitialValues: (data) => dispatchEvent(changeInitialValues(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ailments);