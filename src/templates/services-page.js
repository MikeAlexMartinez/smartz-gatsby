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
      services={frontmatter.services}
    />
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        meta_title: PropTypes.string,
        meta_description: PropTypes.string,
        services: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          textItems: PropTypes.arrayOf(PropTypes.string),
        })),
      }),
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        services {
          id
          title
          textItems
        }
      }
    }
  }
`
