import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AboutPage from '../templates/AboutPage'

const AboutPageWrapper = ({ data }) => {
  const {frontmatter: {
    title,
    meta_description,
    meta_title,
    introduction,
  }} = data.markdownRemark

  return (
    <AboutPage
      title={title}
      meta_description={meta_description}
      meta_title={meta_title}
      blurbs={introduction.blurbs}
    />
  );
};

AboutPageWrapper.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPageWrapper

export const pageQuery = graphql`
  query AboutPageData {
    markdownRemark(fields: {slug: {eq: "/about"}}) {
      id
      frontmatter {
        title
        meta_description
        meta_title
        introduction {
          blurbs {
            id
            text
          }
        }
      }
    }
  }
`