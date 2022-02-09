import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ServicesPage from '../templates/ServicesPage'

const ServicesPageWrapper = ({ data }) => {
  const {frontmatter: {
    title,
    meta_description,
    meta_title,
    services,
  }} = data.markdownRemark

  return (
    <ServicesPage
      title={title}
      meta_description={meta_description}
      meta_title={meta_title}
      services={services}
    />
  )
}

ServicesPageWrapper.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPageWrapper

export const pageQuery = graphql`
  query ServicesPageData {
    markdownRemark(fields: {slug: {eq: "/services"}}) {
      id
      frontmatter {
        title
        meta_description
        meta_title
        services {
          id
          title
          textItems
        }
      }
    }
  }
`