import React from 'react'
import Helmet from 'react-helmet'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomePageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  testimonials,
}) => {
  const testimonialsToShow = testimonials.filter(t => t.type !== 'example')

  return (
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
                  <h5 className='subtitle'>{subtitle}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hero'>
        <div className='content title-image-container'>
          <img src='http://res.cloudinary.com/di6bv5utg/image/upload/c_scale,f_webp,fl_awebp,q_70,w_1900/v1551361444/smartzbooks/bicester-centre.png' />
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='content home-links'>
              <div className='home-link-container'>
                <Link className='home-link button is-large is-primary is-outlined'
                  to='/about'
                >
                  About Me
                </Link>
              </div>
              <div className='home-link-container'>
                <Link className='home-link button is-large is-primary is-outlined'
                  to='/services'
                >
                  My services
                </Link>
              </div>
              <div className='home-link-container'>
                <Link className='home-link button is-large is-primary is-outlined'
                  to='/contact'
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {testimonialsToShow.length > 0 && (
        <section className='section section--gradient'>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='content'>
                    <div>
                      <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                      <Testimonials testimonials={testimonialsToShow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  testimonials: PropTypes.array,
}

export default HomePageTemplate
