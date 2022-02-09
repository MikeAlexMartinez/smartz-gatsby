import React from 'react';
import PageLayout from './src/layouts/Page';

import './src/styles/global.css'

export function wrapPageElement({ element, props }) {
  return <PageLayout {...props}>{element}</PageLayout>;
}
