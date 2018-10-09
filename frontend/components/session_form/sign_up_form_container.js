import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'sign up',
    navLink: <Link to='/login'>Log In</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
