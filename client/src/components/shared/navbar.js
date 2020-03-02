import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href = "index.html">
                                    <img src = "assets/img/logo.png" alt = "logo"/>
                                </a>
                                <button className="navbar-toggler" type = "button" data-toggle = "collapse"
                                        data-target = "#navbarSupportedContent"
                                        aria-controls = "navbarSupportedContent"
                                        aria-expanded = "false"
                                        aria-label = "Toggle navigation">
                                    <span className="navbar-toggler-icon"> </span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                     id = "navbarSupportedContent">
                                    <ul className="navbar-nav align-items-center">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to = "/" > Inicio </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to = "/profile" > Perfil </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to = "/search" > B&uacute;squeda </Link>
                                        </li>

                                        <li className="nav-item dropdown" >
                                            <a className="nav-link dropdown-toggle"
                                               href = "blog.html"
                                               id = "navbarDropdown"
                                               role = "button"
                                               data-toggle = "dropdown"
                                               aria-haspopup = "true"
                                               aria-expanded = "false" >
                                                Pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby = "navbarDropdown" >
                                                <Link className="dropdown-item" to = "/user-data" > User Data </Link>
                                                <a className="dropdown-item" href = "services.html" > Services </a>
                                                <a className="dropdown-item" href = "elements.html" > Elements </a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown" >
                                            <a className="nav-link dropdown-toggle"
                                               href = "blog.html"
                                               id = "navbarDropdown_1"
                                               role = "button"
                                               data-toggle = "dropdown"
                                               aria-haspopup = "true"
                                               aria-expanded = "false" >
                                                blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby = "navbarDropdown_1" >
                                                <a className="dropdown-item" href = "blog.html" > blog </a>
                                                <a className="dropdown-item" href = "single-blog.html" > Single blog </a>
                                            </div>
                                        </li>

                                        <li className="nav-item" >
                                            <Link className="nav-link" to = "/contact" > Contacto </Link>
                                        </li>
                                        {localStorage.getItem('bearer_token') ? (
                                            <li className="d-none d-lg-block" >
                                                <NavLink className="btn_1" to = "/login"> Salir </NavLink>
                                            </li>
                                        ) : (
                                            <span><li className="d-none d-lg-block" >
                                                <NavLink className="btn_1" to = "/registry" > Registrarse </NavLink>
                                            </li>
                                            <li className="d-none d-lg-block" >
                                                <NavLink className="btn_1" to = "/login"> Entrar </NavLink>
                                            </li></span>
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;