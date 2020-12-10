import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

export default function PageTemplate({
  data: {
    allSanityPage: {
      edges: {
        0: { node: page },
      },
    },
  },
  pageContext,
}) {
  console.log(page, pageContext)

  const serializers = {
    types: {
      code: props => (
          <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
      )
    }
  }

  return (
    <Layout>
      <h1>{page.title}</h1>
      <BlockContent blocks={page._rawBody} serializers={serializers} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allSanityPage(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          title
          _rawBody
        }
      }
    }
  }
`
