import React from 'react';
import { Panel } from 'primereact/panel';

class PanelContainer extends React.Component {
    render() {
        const { children, header, toggeable } = this.props;
        return (
            <div className="col-lg-12 col-xl-12">
                <Panel header={header}>
                    { children }
                </Panel>
                <hr/>
            </div>
        );
    }
}

export default PanelContainer;