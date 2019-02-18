import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Service = ({ title, textItems, isOpen, viewService }) => (
  <div className='box cursor'
    onClick={() => viewService(isOpen)}
  >
    <div className='level'>
      <div className='level-left has-text-weight-semibold'>
        {title}
      </div>
      <span
        className='level-right icon has-text-info'
      >{(isOpen
          ? <FaMinus />
          : <FaPlus />
        )}
      </span>
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
