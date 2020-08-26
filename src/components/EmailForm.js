import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you. The seller will be contact with you.' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      
     
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="email" name="email" />
      </form>


      <form id="signup-form" onSubmit={this.onSubmit} method="post" data-netlify="true">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input type="submit" value="Contact Domain Owner" />
        <input type="hidden" name="form-name" value="contact" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
