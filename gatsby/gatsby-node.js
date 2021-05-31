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
      allSanityArticle(filter: {slug: {current: {ne: "null"}}}) {
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
      allSanityEvent(filter: {slug: {current: {ne: "null"}}}) {
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
      allSanityNews(filter: {slug: {current: {ne: "null"}}}) {
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
      allSanityVideo(filter: {slug: {current: {ne: "null"}}}) {
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

  // Create Pages
  const pages = result.data.allSanityPage.edges || []
  pages.forEach((edge, index) => {
    const path = `${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  // Create Articles
  const articles = result.data.allSanityArticle.edges || []
  articles.forEach((edge, index) => {
    const path = `articles/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  // Create Events
  const events = result.data.allSanityEvent.edges || []
  pages.forEach((edge, index) => {
    const path = `events/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/event.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  // Create News
  const news = result.data.allSanityNews.edges || []
  news.forEach((edge, index) => {
    const path = `news/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/news.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  // Create Videos
  const videos = result.data.allSanityVideo.edges || []
  videos.forEach((edge, index) => {
    const path = `videos/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/video.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
