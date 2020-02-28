import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <section className="banner_part" >
                <div className="container" >
                    <div className="row align-items-center" >
                        <div className="col-lg-6 col-xl-6" >
                            <div className="banner_text" >
                                <div className="banner_text_iner" >
                                    <h1 > Datos en caso de Emergencia M&eacute;dica </h1>
                                    <p > Deep created replenish herb without night fruit day earth evening Called his
                                        green were they 're fruitful to over Sea bearing sixth Earth face. Them lesser
                                        great you 'll second
                                    </p>
                                    <a href = "#" className="btn_2" style={{marginLeft: '15%'}}> Descargar para Android </a>
                                    <a href = "#" className="btn_2" > descargar para IOS </a>
                                    <div className="banner_item" >
                                        <div className="single_item" >
                                            <img src = "assets/img/icon/banner_1.svg" alt = "" />
                                            <h5 > Emergency Cases </h5>
                                        </div>
                                        <div className="single_item" >
                                            <img src = "assets/img/icon/banner_2.svg" alt = "" />
                                            <h5 > Easy Appointment </h5>
                                        </div>
                                        <div className="single_item" >
                                            <img src = "assets/img/icon/banner_3.svg" alt = "" />
                                            <h5 > Qualfied Doctores </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;