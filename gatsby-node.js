const path = require("path");
// import path, { resolve } from 'path'
exports.createPages = async ({ graphql, actions, reporter }) => {
  // const { createPage } = actions 

  const {data} = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // Handle errors 
  // if(data.errors){
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // } 

   
  data.allMarkdownRemark.nodes.forEach( node => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }  + 'md'
    })
  })
}