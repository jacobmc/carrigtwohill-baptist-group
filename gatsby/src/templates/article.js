import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import styled from "styled-components";

/**
 * Template component for rendering articles
 *
 * @param page
 * @param pageContext
 * @returns {JSX.Element}
 * @constructor
 */

const Container = styled.article`
    max-width: 954px;
    margin: 0 auto;
    padding: 50px 0;
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
	  padding: 25px 15px;  
    }
  `

const Header = styled.header`
    h1 {
      position: relative;
      display: inline-block;
      max-width: 80%;
      margin-bottom: 0.8rem;
    }
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      h1 {
        font-size: 2rem;
      }
    }
  `

const CanonicalURL = styled.p`
    font-style: italic;
  `

export default function PageTemplate({
  data: {
    allSanityArticle: {
      edges: {
        0: { node: article },
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

  return (
    <Layout>
      <Container>
        <Header>
          {article.featuredImage !== null && article.featuredImage !== undefined &&
          <figure>
            <img
              src={article.featuredImage.asset.url}
              alt={article.featuredImage.alt}
              title={article.featuredImage.title}
            />
          </figure>
          }

          <h1>{article.title}</h1>
          <div>
            <p>by {article.author.name} | {article._createdAt}</p>
          </div>

          {article.canonicalUrl !== null &&
            <CanonicalURL>This article was originally posted <a href={article.canonicalUrl} target={"_blank"} rel={"noreferrer"}>here</a>.</CanonicalURL>
          }
        </Header>
        <section>
          <BlockContent blocks={article._rawBody} serializers={serializers} />
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allSanityArticle(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          _createdAt(formatString: "DD MMMM YYYY")
          title
          author {
            name
          }
          canonicalUrl
          featuredImage {
            asset {
              url
            }
            alt
            title
          }
          _rawBody
        }
      }
    }
  }
`
