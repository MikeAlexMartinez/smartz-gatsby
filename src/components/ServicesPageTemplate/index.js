import React from 'react'
import Helmet from 'react-helmet'
import Services from '../Services'
import PropTypes from 'prop-types'

const ServicesPageTemplate = ({
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
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <Services data={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  services: PropTypes.shape({
    title: PropTypes.string,
    textItems: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default ServicesPageTemplate
