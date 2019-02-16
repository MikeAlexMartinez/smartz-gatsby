import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ServicesPageTemplate from '../components/ServicesPageTemplate'

const ServicesPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <ServicesPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      pricing={frontmatter.pricing}
    />
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
