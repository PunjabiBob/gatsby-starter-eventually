import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };


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
         
        <form name="contact" id="signup-form" onSubmit={this.handleSubmit} method="post" data-netlify="true" data-netlify-honeypot="bot-field">
       <input type="hidden" name="form-name" value="contact" />
       <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        /><br></br>
        <textarea
          name="message"
          id="text"
          rows="2"
          cols="50"
          placeholder="Type a message to the seller."
        />
        <br></br>
        <input type="submit" value="Contact Domain Owner" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
