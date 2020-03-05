import React from 'react';
import { connect } from 'react-redux';

class ProfileInfo extends React.Component {
    render() {
        return(
            <h3>profile Info</h3>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {profileInfo, form} = state;
    return {
        ...ownProps,
        ...profileInfo,
        form
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {

    }
}

export default connect()(ProfileInfo);