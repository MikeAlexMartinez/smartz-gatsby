import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, subtitle }) => (
  <section className='bg-gradient-to-r from-sky-600 to-sky-700'>
    <div className='container py-16 px-4 md:px-2 mx-auto flex flex-col items-left justify-center text-white'>
      <h1 className='font-medium text-2xl md:text-4xl pb-4'>
        {title}
      </h1>
      {subtitle ? <h5 className='font-light text-l md:text-xl'>{subtitle}</h5> : null}
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaultProps = {
  subtitle: '',
};

export default Hero;
