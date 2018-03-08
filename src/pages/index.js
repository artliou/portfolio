import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Bio from '../components/Bio'
// import { rhythm } from '../utils/typography'

import Img from 'gatsby-image';

// class Home extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allMarkdownRemark.edges')

//     console.log(this.props.data)

//     return (
//       <div>
//         <Helmet title={siteTitle} />
//         <Bio />
//         <Img sizes={this.props.data.imageOne.sizes} />

//         {posts.map(({ node }) => {
//           const title = get(node, 'frontmatter.title') || node.fields.slug
//           return (
//             <div key={node.fields.slug}>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//               <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//             </div>
//           )
//         })}

//         <Img sizes={this.props.data.imageTwo.sizes} />
//         <Img sizes={this.props.data.imageThree.sizes} />

//       </div>
//     )
//   }
// }

const Home = (props) => (

  <div>
    <h1>Welcome!</h1>
    <p>Website Design & Code is Currently Tailored for OSU 290 Project</p>
  </div>

)

export default Home

