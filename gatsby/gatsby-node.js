exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            id
            title
            slug {
              _key
              _type
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw result.errors
  }

  const pages = result.data.allSanityPage.edges || []
  pages.forEach((edge, index) => {
    const path = `${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
