import React from "react";
import Img from "gatsby-image";

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img resolutions={data.file.childImageSharp.resolutions} />
  </div>
);

// export const query = graphql`
//   query GatsbyImageSampleQuery {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         resolutions(width: 125, height: 125) {
//           ...GatsbyImageSharpResolutions
//         }
//       }
//     }
//   }
// `