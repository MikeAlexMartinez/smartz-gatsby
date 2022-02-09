const React = require('React');
const { default: PageLayout } = require('./src/layouts/Page');

exports.wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
