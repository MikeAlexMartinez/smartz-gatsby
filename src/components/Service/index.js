import React from 'react'
import PropTypes from 'prop-types'

const Service = ({ title, textItems, isOpen, viewService }) => (
  <div className='box'>
    <div className='level'>
      <div className='level-left'>
        {title}
      </div>
      <button
        className='level-right'
        onClick={() => viewService()}
      >View Service</button>
    </div>
    {isOpen && textItems.map(item => (
      <div className='level'>
        {item}
      </div>
    ))}
  </div>
)

Service.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  textItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  viewService: PropTypes.func.isRequired,
}

export default Service
