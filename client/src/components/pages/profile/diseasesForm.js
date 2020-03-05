import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../../customInputsForm/customInput';

const style = {
    clear: 'both',
    border: 'none'
}

class DiseasesForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="id" component="input" type="hidden" />
                <Field name="disease" component={CustomInput} placeholder="Enfermedad" label='Enfermedad:'/>
                <Field name="observations" component={CustomInput} placeholder="Observaciones" label='Observaciones:'/>
                <button type="submit" className="button button-contactForm btn_1" style={{float: 'right'}}>Registrar</button>
                <hr style={style} />
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.ailment) {
        errors.disease = 'Campo obligatorio';
    }

    return errors;
}

export default reduxForm({
    form: 'diseases',
    validate,
})(DiseasesForm);