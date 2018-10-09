import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import React from 'react';
import { login } from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>,
});



const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
