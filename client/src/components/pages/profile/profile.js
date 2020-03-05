import React from 'react';
import Avatar from 'react-avatar-edit'
import Container from '../../shared/container';
import ProfileInfo from './profileInfo';
import Ailments from './ailments';
import Diseases from './diseases';
import PanelContainer from '../../shared/panelContainer';

import decode from 'jwt-decode';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            preview: null,
            src: null
        }
    }

    componentDidMount = () => {
        const token = localStorage.getItem('bearer_token');
        const obj = decode(token);
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
                {/* <div>
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
                </div> */}
                <div style={{clear: 'both'}}></div>
                <PanelContainer header='Informacion'>
                    <ProfileInfo />
                </PanelContainer>
                <PanelContainer header='Padecimientos'>
                    <Ailments />
                </PanelContainer>
                <PanelContainer header='Enfermedades'>
                    <Diseases />
                </PanelContainer>

            </Container>
        );
    }
}

export default Profile;