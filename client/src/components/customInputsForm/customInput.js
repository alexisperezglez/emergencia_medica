import React from 'react';
import { InputText } from 'primereact/inputtext';

export default class CustomInput extends React.Component {
    render() {
        console.log(this.props);
        const {input, meta, placeholder} = this.props;
        return(
            <span className="p-float-label">
                <InputText id="in" {...input}/>
                <label htmlFor="in">{placeholder}</label>
                {(meta.submitFailed || meta.dirty) && meta.error && <span style={{color: 'red'}}>{meta.error}</span>}
            </span>
        );
    }
}