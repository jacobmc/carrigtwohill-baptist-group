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
  `

  return (
    <Layout>
      <Container>
        <header>
          <h1>{page.title}</h1>
        </header>
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
