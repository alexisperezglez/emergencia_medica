import React from 'react';
import Navbar from './shared/navbar';
import Footer from './shared/footer';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import Profile from './pages/profile/profile';
import Registry from './pages/registry/registry';
import AuthRouter from './shared/authRouter';

class Layout extends React.Component {

    render() {
        return (
          <div>
            <Navbar />
            <div>
                <AuthRouter path="/profile" component={Profile} />
                <Route path="/registry">
                  <Registry />
                </Route>
                {/* <Route path="/user-data">
                  <UserData />
                </Route> */}
                {/* <Route path="/search">
                  <Search />
                </Route> */}
                {/* <Route exact path="/contact">
                  <Contact />
                </Route> */}
                <Route exact path="/">
                  <Home />
                </Route>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Layout;