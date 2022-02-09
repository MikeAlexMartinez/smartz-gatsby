import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Offerings from '../components/Offerings'
import Hero from '../components/Hero'

const AboutPageTemplate = ({
  title,
  blurbs,
  meta_title,
  meta_description,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <Hero title={title} />
      <section>
        <div className='container mx-auto'>
          <Offerings gridItems={blurbs} />
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  blurbs: PropTypes.array,
}

export default AboutPageTemplate