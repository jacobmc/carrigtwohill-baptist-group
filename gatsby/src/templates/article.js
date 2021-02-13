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

  const FeaturedImage = styled.figure`
    position: relative; 
    
    img {
      display: block;
      width: 100%;
      margin: 0;
    }
    
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      content: "";
      height: 100%;
      width: 100%;
      box-shadow: inset 0px 0px 10px #eaeaea;
    }
  `
  const CanonicalURL = styled.p`
    font-style: italic;
  `

  console.log(article)

  return (
    <Layout>
      <Container>
        <Header>
          {article.featuredImage !== null &&
          <FeaturedImage>
            <img
              src={article.featuredImage.asset.url}
              alt={article.featuredImage.alt}
              title={article.featuredImage.title}
            />
          </FeaturedImage>
          }

          <h1>{article.title}</h1>
          <div>
            <p>by {article.author.name} | {article._createdAt}</p>
          </div>

          {article.canonicalUrl !== null &&
          <CanonicalURL>This article was originally posted <a href={article.canonicalUrl} target={"_blank"}>here</a>.</CanonicalURL>
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
