import React from 'react';
import Avatar from 'react-avatar-edit'
import Container from '../../shared/container';
import ProfileInfo from './profileInfo';
import Ailments from './ailments';
import Diseases from './diseases';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            preview: null,
            src: null
        }
    }

    onClose = () => {
        this.setState({
            preview: null
        })
    }

    onCrop = (preview) => {
        console.log('PREVIEW: ', preview);
        this.setState({
            preview
        })
    }
    render() {
        return(
            <Container title="Perfil">
                <div>
                    <Avatar
                        width={390}
                        height={295}
                        onCrop={this.onCrop}
                        onClose={this.onClose}
                        src={this.state.src}
                        />
                    <div>
                        <img src={this.state.preview} alt="Preview" />
                    </div>
                </div>
                <div style={{clear: 'both'}}></div>
                <ProfileInfo />
                <Ailments />
                <Diseases />

            </Container>
        );
    }
}

export default Profile;