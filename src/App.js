import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [token, setToken] = useState(false)
  if (localStorage.getItem('token')) {
     setToken(true)
   }
  return (
  <>
    <Router>
      <Switch>
    {token ? <Redirect to='/dashboard' /> : ''}
        <Route exact path="/" component={Login} />
        <PrivateRoute  path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
   </>   
  );
}

export default App;
