import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){
    return (
      <div>
        <ul>
          {this.props.errors.map( err => <li>{err}</li>)}
        </ul>
      </div>
    );
  }

  updateForm(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  render() {

    return (
      <div>
        <header>Welcome to Bench Bnb</header>
        <div>Please {this.props.formType} or {this.props.navLink}</div>
        <form onSubmit={this.handleSubmit} >
          {this.renderErrors()}
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.updateForm('username')} />
          </label>
          <label>Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.updateForm('password')} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }


}


export default SessionForm;
