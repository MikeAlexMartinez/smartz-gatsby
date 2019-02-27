import React from 'react'
import PropTypes from 'prop-types'

const FormErrors = ({ errors }) => (errors && errors.length > 0 && errors.map((message, i) => (
  <div key={i} className='help is-danger'>
    {message}
  </div>
))) || null

FormErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default FormErrors
