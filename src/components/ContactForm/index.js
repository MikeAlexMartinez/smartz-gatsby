import React from 'react'

class ContactForm extends React.Component {
  render () {
    return (
      <div className='content'>
        <div className='box'>
          <div className='columns full-width'>
            <form className='full-width'>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Text input' />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Username</label>
                <div className='control has-icons-left has-icons-right'>
                  <input className='input is-success' type='text' placeholder='Text input' value='bulma' />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-user' />
                  </span>
                  <span className='icon is-small is-right'>
                    <i className='fas fa-check' />
                  </span>
                </div>
                <p className='help is-success'>This username is available</p>
              </div>

              <div className='field'>
                <label className='label'>Email</label>
                <div className='control has-icons-left has-icons-right'>
                  <input className='input is-danger' type='email' placeholder='Email input' value='hello@' />
                  <span className='icon is-small is-left'>
                    <i className='fas fa-envelope' />
                  </span>
                  <span className='icon is-small is-right'>
                    <i className='fas fa-exclamation-triangle' />
                  </span>
                </div>
                <p className='help is-danger'>This email is invalid</p>
              </div>

              <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                  <textarea className='textarea' placeholder='Textarea' />
                </div>
              </div>

              <div className='field'>
                <div className='control'>
                  <button className='button is-link'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
