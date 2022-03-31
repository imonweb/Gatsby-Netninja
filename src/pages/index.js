import { graphql, Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
// import styles from '../styles/home.module.css'
import * as styles from "../styles/home.module.css";
import Coffee from '../images/coffee.png'

import { GatsbyImage, getImage } from "gatsby-plugin-image";
  
export default function Home({data}) {
// export default function Home({data}) {
  console.log(data)
  // const {title, description} = data.site.siteMetadata  

  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & Web Developer based in Stoke-on-Trent, England</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <img src={Coffee} alt="coffee"/> */}
        <GatsbyImage image={image} alt="Banner" />
        {/* <p>{title} - { description }</p> */}
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query MyQuery {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// ` 

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData (
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
}
`