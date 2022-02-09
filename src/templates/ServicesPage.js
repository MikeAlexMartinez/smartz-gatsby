import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Services from '../components/Services'
import Hero from '../components/Hero'

const ServicesPage = ({
  title,
  meta_title,
  meta_description,
  services,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <Hero title={title} />
    <Services data={services} />
  </div>
)

ServicesPage.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    textItems: PropTypes.arrayOf(PropTypes.string),
  })),
}

export default ServicesPage