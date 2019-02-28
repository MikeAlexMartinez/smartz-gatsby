import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../components/AboutPageTemplate'

const AboutPage = ({ data }) => {
  const {frontmatter} = data.markdownRemark

  return (
    <AboutPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      introduction={frontmatter.introduction}
      testimonials={frontmatter.testimonials}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        introduction {
          blurbs {
            id
            text
          }
        }
        testimonials {
          author
          quote
          type
        }
      }
    }
  }
`
