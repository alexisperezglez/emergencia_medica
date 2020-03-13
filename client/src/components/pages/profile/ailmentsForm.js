import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../../customInputsForm/customInput';

const style = {
    clear: 'both',
    border: 'none'
}

class AilmentsForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="id" component="input" type="hidden" />
                <Field name="ailment" component={CustomInput} placeholder="Padecimiento" label='Padecimiento:'/>
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
        errors.ailment = 'Campo obligatorio';
    }

    return errors;
}

export default reduxForm({
    form: 'ailments',
    validate,
    enableReinitialize: true,
})(AilmentsForm);