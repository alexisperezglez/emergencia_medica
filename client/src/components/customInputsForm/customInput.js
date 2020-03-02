import React from 'react';

export default class CustomInput extends React.Component {
    render() {
        console.log('INPUT_PROPS:', this.props);
        const {input, meta, label, ...others} = this.props;
        return(
            <div className="form-group">
                {label ? (<label>{label}</label>) : null}
                <input type="text" className="form-control" {...input} {...others} />
            </div>
        );
    }
}