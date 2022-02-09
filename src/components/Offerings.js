import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='pb-8 text-light text-slate-600 m-4'>
    {gridItems.map(item => (
      <div key={item.id} className='pt-8' style={{borderRadius: '5px'}}>
        <section>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ),
}

export default Offerings