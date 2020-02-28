import React from 'react';

class Footer extends React.Component {
     render() {
        return (
            <footer className="footer-area" >
                <div className="copyright_part" >
                    <div className="container" >
                        <div className="row align-items-center" >
                            <p className="footer-text m-0 col-lg-8 col-md-12" >
                                Link back to Colorlib can 't be removed. Template is licensed under CC BY 3.0.
                                Copyright & copy; {new Date().getFullYear()}
                                All rights reserved | This template is made with
                                <i className="ti-heart" aria-hidden="true"></i>
                                by
                                <a href = "https://colorlib.com" target = "_blank" rel="noopener noreferrer"> Colorlib </a>
                                Link back to Colorlib can 't be removed. Template is licensed under CC BY 3.0.
                            </p>
                            <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social" >
                                <a href = "#" > <i className="ti-facebook" > </i></a>
                                <a href = "#" > <i className="ti-twitter" > </i> </a>
                                <a href = "#" > <i className="ti-instagram" > </i></a>
                                <a href = "#" > <i className="ti-skype" > </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
     }
}

export default Footer;