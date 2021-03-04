import React from 'react'
import { Route, Switch } from "react-router-dom"

import RegistrationPage from './containers/Registration'
import Dashboard from './containers/Dashboard'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
