import React from 'react';

export default class Container extends React.Component {

    render() {
        const { children } = this.props;
        return(
            <section className="section_padding">
                <div className="container">
                    <div className="row align-items-center">
                        { this.props.title ? (
                            <div className="col-lg-12 col-xl-12"><h3 style={{textAlign: 'center'}}>{ this.props.title }</h3></div>
                        ) : null }
                        { children }
                    </div>
                </div>
            </section>
        );
    }

}