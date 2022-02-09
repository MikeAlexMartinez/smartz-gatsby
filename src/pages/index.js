import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import HomePage from '../templates/HomePage'

const HomePageWrapper = ({ data }) => {
  const {frontmatter: {
    title,
    meta_description,
    meta_title,
    subtitle,
  }} = data.markdownRemark

  return (
    <HomePage
      title={title}
      meta_description={meta_description}
      meta_title={meta_title}
      subtitle={subtitle}
    />
  )
}

HomePageWrapper.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePageWrapper

export const pageQuery = graphql`
  query HomePageData {
    markdownRemark(fields: {slug: {eq: "/index"}}) {
      id
      frontmatter {
        title
        meta_description
        meta_title
        subtitle
      }
    }
  }
`