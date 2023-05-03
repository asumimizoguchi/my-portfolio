const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
      query Projects {
        allMarkdownRemark{
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
      actions.createPage({
        path: '/projects/' + node.frontmatter.slug,
        component: path.resolve('./src/templates/project-details.js'),
        context: { slug: node.frontmatter.slug }
      })
    })

}

exports.createPages2 = async ({ graphql, actions }) => {

  const { data1 } = await graphql(`
    query About {
      allMarkdownRemark{
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data1.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage2({
      path: '/about/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/about-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}