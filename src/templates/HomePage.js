import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Hero from '../components/Hero'

const HomePage = ({
  title,
  subtitle,
  meta_title,
  meta_description,
}) => {
  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <Hero title={title} subtitle={subtitle} />
      <section>
        <img
          className="home-image h-[350px] md:h-[500px] w-full object-cover"
          src='../images/bicester-centre.png'
          alt="Bicester Town Centre"
        />
      </section>
      <section>
        <div className="container px-8 md:px-0 mx-auto flex flex-wrap justify-evenly items-center py-14 text-xl">
          <Link to='/about' className='cursor-pointer m-2 min-w-[150px]'>
            <div className="py-2 px-4 text-center border-sky-600 border rounded text-sky-600 hover:bg-sky-600 hover:text-white">
              About
            </div>
          </Link>
          <Link to='/services' className='cursor-pointer m-2 min-w-[150px]'>
            <div className="py-2 px-4 text-center border-sky-600 border rounded text-sky-600 hover:bg-sky-600 hover:text-white">
              Services
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

HomePage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default HomePage