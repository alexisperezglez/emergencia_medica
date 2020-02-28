import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Login from './components/pages/login/login';
import NotFound404 from './components/errors/notfound404';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Layout} />
            {/* <Route exact path="/register" component={Register} /> */}
            {/* <PrivateRoute exact path="/dashboard" component={Layout} /> */}
            <Route component={localStorage.jwtTokenTeams ? Layout : NotFound404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
