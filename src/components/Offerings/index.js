import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.id} className='column is-12' style={{borderRadius: '5px'}}>
        <section className='section'>
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
