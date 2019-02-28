import React from 'react'
import * as emailValidator from 'email-validator'
import { handleForm } from '../../api/FormAPI'
import FormErrors from '../FormErrors'

class ContactForm extends React.Component {
  state = {
    name: {
      value: '',
      isValid: false,
      messages: [],
    },
    email: {
      value: '',
      isValid: false,
      messages: [],
    },
    message: {
      value: '',
      isValid: false,
      messages: [],
    },
    errorEncountered: false,
    sendSuccess: false,
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
        name: name.value,
        email: email.value,
        message: message.value,
      }

      handleForm(form)
        .then(this.formSuccess)
        .catch(this.formError)
    }
  }

  formError = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      errorEncountered: true,
    }))

    setTimeout(() => {
      this.setState((prevState) => ({
        ...prevState,
        errorEncountered: false,
      }))
    }, 1000 * 15)
  }

  formSuccess = (res) => {
    this.setState((prevState) => ({
      ...prevState,
      sendSuccess: true,
    }))
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
      return {
        ...prevState,
        name: {
          value,
          ...this.validateName(value),
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
    } else if (value.length > 1000) {
      errors.messages.push('Your message should less than 1000 characters')
    }
    if (!/([\w\s'"&@().,;£$€!?-])/.test(value)) {
      errors.messages.push('Your message should contain alphanumeric characters')
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
    const { name, email, message,
      submittingForm, errorEncountered, sendSuccess } = this.state
    const isInvalid = !this.isFormValid()
    return (
      <div className='content'>
        {!sendSuccess && (<div>
          <div className='field'>
            <label className='label is-large'>Name</label>
            <div className='control'>
              <input
                className='input is-medium'
                type='text'
                placeholder='Your name...'
                value={name.value}
                onChange={this.handleName}
              />
            </div>
            <FormErrors errors={name.messages} />
          </div>

          <div className='field'>
            <label className='label is-large'>Email</label>
            <div className='control'>
              <input
                className='input is-medium'
                type='email'
                placeholder='Your e-mail address'
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
            <FormErrors errors={email.messages} />
          </div>

          <div className='field'>
            <label className='label is-large'>Message</label>
            <div className='control'>
              <textarea
                className='textarea is-medium message-body'
                placeholder='Your message...'
                value={message.value}
                onChange={this.handleMessage}
              />
            </div>
            <FormErrors errors={message.messages} />
          </div>

          <div className='field'>
            <div className='control'>
              <button
                disabled={isInvalid}
                className='button is-link is-large'
                onClick={this.submitForm}
              >Submit</button>
            </div>
            {errorEncountered && (
              <span className='form-message'>Error Encountered, Please try again later...</span>
            )}
            {submittingForm && (
              <span className='form-message'>Sending Form...</span>
            )}
          </div>
        </div>)}
        {sendSuccess && (
          <div className='large has-text-centered sent-success'>
            <h2>Thanks, Message Sent Successfully!</h2>
            <h2>I will get back to you as soon as possible.</h2>
          </div>
        )}
      </div>
    )
  }
}

export default ContactForm
