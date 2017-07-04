import React from 'react';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  onSubmit(e) {
    e.preventDefault();
      this.setState({ errors: {} })
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data })
       )
      this.props.addFlashMessage({
        type: 'success',
        text: 'you signed up successfully. Welcome!'
      })
      browserHistory.push('/')
    }

  render() {
    const { errors } = this.state
    return(
      <form onSubmit={this.onSubmit}>
        <h1> Join us! </h1>


        <div className="form-group">
          <label className="control-label"> Name</label>
          <input
          value={this.state.name}
          onChange={this.onChange}
          type="text"
          name="name"
          className="form-control"
          />
          {errors.name && <span className="help-block">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="control-label"> Email</label>
          <input
          value={this.state.email}
          onChange={this.onChange}
          type="email"
          name="email"
          className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label"> Password</label>
          <input
          value={this.state.password}
          onChange={this.onChange}
          type="password"
          name="password"
          className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label"> Password Confirmation</label>
          <input
          value={this.state.passwordConfirmation}
          onChange={this.onChange}
          type="password"
          name="passwordConfirmation"
          className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default SignupForm;
