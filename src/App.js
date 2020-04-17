import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
  </Router>
  )
}

export default App;
