import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import styled from "styled-components";

/**
 * Template component for rendering videos
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
      margin-bottom: 50px;
    }
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      h1 {
        font-size: 2rem;
      }
    }
  `

const Video = styled.div`
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 56.25%; // 16:9
    height: 0;
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `

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

  const videoID = video.url.replace(/^.*v=(.*)(&|$)/, '$1').replace(/&.*/, '')

  return (
    <Layout>
      <Container>
        <Header>
          <h1>{video.title}</h1>
        </Header>
        <section>
          {video.url !== null && video.url !== undefined &&
            <Video>
              <iframe
                  id={'ytplayer'}
                  title={video.title}
                  src={'https://youtube.com/embed/' + videoID}
                  frameBorder={'0'}
              />
            </Video>
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
