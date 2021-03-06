import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Parks from '../components/Parks/Parks';
import ProfileContainer from '../containers/ProfileContainer';
import SpotsContainer from '../containers/SpotsContainer';
import ParksContainer from '../containers/ParksContainer';

const Routes = ({ setCurrentUser, history, currentUser }) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      currentUser
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/register' component={ Register } />
      <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} history={history} />} />
      <PrivateRoute path='/parks' component= { ParksContainer } />
      <PrivateRoute path='/profile' component={ ProfileContainer } />
      <PrivateRoute path='/spots' component={ SpotsContainer } />
    </Switch>
  );
};

export default withRouter(Routes);
