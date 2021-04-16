import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
 
  return (
  <>
    <Router>
      <Switch>
    
        <Route exact path="/" component={Login} />
        <PrivateRoute  path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
   </>   
  );
}

export default App;
