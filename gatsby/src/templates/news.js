import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

/**
 * Template component for rendering pages
 *
 * @param page
 * @param pageContext
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageTemplate({
  data: {
    allSanityNews: {
      edges: {
        0: { node: news },
      },
    },
  },
  pageContext,
}) {
  const serializers = {
    types: {
      code: props => (
          <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
      )
    }
  }

  const Container = styled.article`
    max-width: 954px;
    margin: 0 auto;
    padding: 50px 0;
  `

  const Header = styled.header`
     h1 {
      position: relative;
      display: inline-block;
      max-width: 80%;
      margin-bottom: 0.8rem;
    }
  `

  return (
    <Layout>
      <Container>
        <Header>
          {news.featuredImage !== null && news.featuredImage !== undefined &&
          <figure>
            <img
                src={news.featuredImage.asset.url}
                alt={news.featuredImage.alt}
                title={news.featuredImage.title}
            />
          </figure>
          }

          <h1>{news.title}</h1>
        </Header>
        <section>
          <BlockContent blocks={news._rawBody} serializers={serializers} />
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allSanityNews(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          title
          _rawBody
        }
      }
    }
  }
`
