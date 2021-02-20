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
    allSanityVideo: {
      edges: {
        0: { node: video },
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
      margin-bottom: 50px;
    }
  `

  const videoID = video.url.replace(/^.*v=(.*)(&|$)/, '$1').replace(/&.*/, '')

  return (
    <Layout>
      <Container>
        <Header>
          <h1>{video.title}</h1>
        </Header>
        <section>
          {video.url !== null && video.url !== undefined &&
            <iframe
				id={'ytplayer'}
                type={'text/html'}
                width={'954'}
                height={'539'}
                src={'https://youtube.com/embed/' + videoID}
                frameBorder={'0'}
            />
          }

          <BlockContent blocks={video._rawDescription} serializers={serializers} />
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allSanityVideo(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          title
          _rawDescription
          url
        }
      }
    }
  }
`
