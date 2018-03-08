import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'DodgerBlue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <h1 style={{ display: `inline`, margin: 0 }}>
          Arthur Liou
      </h1>
      </Link>

      <ul style={{
        float: `right`,
        display: `block`,
      }}>
        <li><Link to="/contact/" style={{
          color: 'white',
          textDecoration: 'none',
        }}>Contact</Link></li>
        <li><Link to="/about/" style={{
          color: 'white',
          textDecoration: 'none',
        }}>About</Link></li>
        <li><Link to="/experience" style={{
          color: 'white',
          textDecoration: 'none',
        }}>Experience</Link></li>
      </ul>

    </div>
  </div>
)

export default Header
