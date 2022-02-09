const React = require('react');
const { default: PageLayout } = require('./src/layouts/Page');

exports.wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
