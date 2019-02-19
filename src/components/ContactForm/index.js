import React from 'react'
import * as emailValidator from 'email-validator'

class ContactForm extends React.Component {
  state = {
    name: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    email: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    message: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    submittingForm: false,
    services: this.props.services.map(s => ({...s, selected: false})) || [],
  }

  submitForm = () => {
    if (this.isFormValid()) {
      this.setState((prevState) => ({
        ...prevState,
        submittingForm: true,
      }))
      const { name, email, message } = this.state
      const form = {
        source: 'Smartz-Contact',
        name,
        email,
        message,
      }
      this.props.handleForm(form)
    }
  }

  isFormValid = () => {
    const { name, email, message } = this.state
    return name.isValid && email.isValid && message.isValid
  }

  validateName = (value) => {
    let errors = { messages: [] }
    if (!value || value.length === 0) {
      errors.messages.push('Your name is required')
    }
    if (!/[\w\s-']/.test(value)) {
      errors.messages.push('Your name should contain letters, spaces, apostrophes and hypens only.')
    }

    // Should be:
    // - alphanumeric,
    // - allowing spaces,
    // - apostrophes ', and
    // - hyphens -
    return {
      ...errors,
      isValid: errors.messages.length === 0,
    }
  }

  handleName = (evt) => {
    const value = evt.target.value
    this.setState((prevState) => {
      console.log(value)
      return {
        ...prevState,
        name: {
          value,
          isValid: this.validateName(value),
        },
      }
    })
  }

  validateEmail = (value) => {
    let errors = { messages: [] }
    if (!value || value.length === 0) {
      errors.messages.push('An e-mail is required')
    }
    if (!emailValidator.validate(value)) {
      errors.messages.push('This appears to be an invalid e-mail address')
    }
    return {
      ...errors,
      isValid: errors.messages.length === 0,
    }
  }

  handleEmail = (evt) => {
    const value = evt.target.value
    this.setState((prevState) => ({
      ...prevState,
      email: {
        value,
        ...this.validateEmail(value),
      },
    }))
  }

  validateMessage = (value) => {
    let errors = { messages: [] }
    if (!value || value.length < 10) {
      errors.messages.push('Your message should contain at least 10 characters')
    }
    if (!/([\w\s'"&@().,;£$€!?-])/.test(value)) {
      errors.messages.push('Message should contain alphanumeric characters')
    }
    return {
      ...errors,
      isValid: errors.messages.length === 0,
    }
  }

  handleMessage = (evt) => {
    const value = evt.target.value
    this.setState((prevState) => ({
      ...prevState,
      message: {
        value,
        ...this.validateMessage(value),
      },
    }))
  }

  addService = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      services: prevState.services.map(s =>
        s.id === id
          ? {
            ...s,
            selected: true,
          }
          : s
      ),
    }))
  }

  removeService = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      services: prevState.services.map(s =>
        s.id === id
          ? {
            ...s,
            selected: false,
          }
          : s
      ),
    }))
  }

  render () {
    const { name, email, message, services } = this.state
    const isInvalid = !this.isFormValid()
    console.log(services)
    return (
      <div className='content'>
        <div className='box'>
          <div className='field'>
            <label className='label is-large'>Name</label>
            <div className='control'>
              <input
                className='input is-large'
                type='text'
                placeholder="What's your name"
                value={name.value}
                onChange={this.handleName}
              />
            </div>
          </div>

          <div className='field'>
            <label className='label is-large'>Email</label>
            <div className='control'>
              <input
                className='input is-large'
                type='email'
                placeholder='Please provide your e-mail address'
                value={email.value}
                onChange={this.handleEmail}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope' />
              </span>
              <span className='icon is-small is-right'>
                <i className='fas fa-exclamation-triangle' />
              </span>
            </div>
            {/* <p className='help is-danger'>This email is invalid</p> */}
          </div>

          <div className='field'>
            <label className='label is-large'>Message</label>
            <div className='control'>
              <textarea
                className='textarea is-large'
                placeholder='Textarea'
                value={message.value}
                onChange={this.handleMessage}
              />
            </div>
          </div>

          <div className='field'>
            <div className='control'>
              <button
                disabled={isInvalid}
                className='button is-link is-large'
                onClick={this.submitForm}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
