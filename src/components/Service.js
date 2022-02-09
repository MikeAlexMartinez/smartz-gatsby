import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Service = ({ id, title, textItems, isOpen, viewService }) => (
  <div className='mb-4 first:mt-4'>
    <button
      key={id}
      className='border rounded py-3 px-4 cursor-pointer w-full'
      onClick={() => viewService(isOpen)}
    >
      <div className='flex justify-between items-center'>
        <div className='font-normal'>
          {title}
        </div>
        <span className='text-sky-700'>{(isOpen ? <FaMinus /> : <FaPlus />)}</span>
      </div>
      {isOpen && textItems.map((item, i) => (
        <div key={`${i}-${item[0]}`} className='mt-4 font-light text-left'>
          {item}
        </div>
      ))}
    </button>
  </div>
)

Service.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  textItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  viewService: PropTypes.func.isRequired,
}

export default Service
