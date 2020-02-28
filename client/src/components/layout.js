import React from 'react';
import Navbar from './shared/navbar';
import Footer from './shared/footer';
import Home from './pages/home';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Profile from './pages/profile/profile';
import Registry from './pages/registry/registry';

class Layout extends React.Component {

  constructor(props){
    super(props);
  }

    render() {
        return (
          <div>
            <Navbar />
            <div>
                <Route path="/profile">
                  <Profile />
                </Route>
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