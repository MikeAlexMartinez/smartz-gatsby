import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Service from './Service'

function Services({ data }) {
  const [serviceInView, setServiceInView] = useState(0);

  return (
    <section className="p-4 md:p-0 container mx-auto">
      {data.map((s, i) => (
        <Service
          key={`s-${s.id}`}
          id={s.id}
          title={s.title}
          textItems={s.textItems}
          isOpen={i === serviceInView}
          viewService={(isOpen) => {
            if (!isOpen) {
              setServiceInView(i)
            } else {
              setServiceInView(-1)
            }
          }}
        />
      ))}
    </section>
  )
}

Services.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      textItems: PropTypes.arrayOf(PropTypes.string),
    })
  ),
}

export default Services