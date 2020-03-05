import React from 'react';
import { Panel } from 'primereact/panel';

class PanelContainer extends React.Component {
    render() {
        const { children, header, toggleable } = this.props;
        return (
            <div className="col-lg-12 col-xl-12">
                <Panel header={header} toggleable={toggleable}>
                    { children }
                </Panel>
                <hr/>
            </div>
        );
    }
}

export default PanelContainer;