import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
// import img from "gatsby-image"; [deprecated]
import { GatsbyImage } from 'gatsby-plugin-image'

const Projects = ({data}) => {
  console.log(data)

  // const projects = data.allMarkdownRemark.nodes
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" +  project.frontmatter.slug} key={project.id}>
              <div>
                {/* <img fluid={project.frontmatter.thumb.childImageSharp.fluid} /> */}
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contact } for a quote.</p>
      </div>
    </Layout>
  )
}

export default Projects;


// export page query

// export const query = graphql`
// query ProjectsPage {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         title
//         stack
//         slug
//       }
//       id
//     }
//   }
// }
// `

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
           thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`