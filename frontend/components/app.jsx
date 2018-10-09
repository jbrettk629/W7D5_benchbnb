import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './benches/search_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer/>
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    <Route exact path='/' component={SearchContainer} />
  </div>
);

export default App;
