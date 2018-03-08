import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link";

import Header from '../components/Header';

import './index.css';

import Carousel from '../components/slideshow.js';
import "./carousel.min.css"; //Need this, but CSS is off

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Arthur"
      meta={[
        { name: 'description', content: 'Test' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper