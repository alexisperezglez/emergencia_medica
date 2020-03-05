import React from 'react';
import { connect } from 'react-redux';
import { fetchProfileThunk } from '../../../thunks/profileInfothunk';

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
        fetchProfileThunk: () => dispatchEvent(fetchProfileThunk()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);