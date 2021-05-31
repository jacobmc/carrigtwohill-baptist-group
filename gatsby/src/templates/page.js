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
    allSanityPage: {
      edges: {
        0: { node: page },
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

  // Render the contact form if this is the contact page
  const renderContactForm = () => {
    if(pageContext.slug === 'contact') {
      return <ContactForm />
    }
  }

  const Container = styled.article`
    max-width: 954px;
    margin: 0 auto;
    padding: 100px 0;
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      padding: 25px 15px;
    }
  `

  const Header = styled.header`
    h1 {
      position: relative;
      display: inline-block;
      max-width: 60%;
      
      span {
        position: relative;
        display: inline-block;
        z-index: 100;
      }
      
      &::after {
        position: absolute;
        left: 0;
        bottom: -5px;
        content: '';
        max-width: 550px;
        width: 110%;
        height: 10px;
        background: #AB2346; //#037971; 
        z-index: 1;
      }
    }
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      h1 {
        font-size: 2.25rem;
      }
    }
  `

  return (
    <Layout>
      <Container>
        <Header>
          <h1><span>{page.title}</span></h1>
        </Header>
        <section>
          <BlockContent blocks={page._rawBody} serializers={serializers} />
          {renderContactForm()}
        </section>
      </Container>
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
