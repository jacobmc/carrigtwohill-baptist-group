import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components";
import Layout from "../components/Layout"
import ListedContent from "../components/ListedContent";

const Container = styled.section`
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
            display: block;
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

const List = styled.ul`
      margin: 0;
      list-style: none;
      
      li {
        margin-bottom: 0;
        border-bottom: 1px solid #ccc;
      }
    `

export default function Resources() {
    const data = useStaticQuery(graphql`
        query {
            allSanityArticle(sort: {fields: publishedAt, order: DESC}) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        featuredImage {
                            asset {
                                url
                            }
                            title
                            alt
                        }
                        publishedAt
                        body {
                            children {
                                text
                            }
                        }
                    }
                }
            }
            allSanityVideo(sort: {fields: publishedAt, order: DESC}) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        featuredImage {
                            asset {
                                url
                            }
                            title
                            alt
                        }
                        publishedAt
                        description {
                            children {
                                text
                            }
                        }
                    }
                }
            }
        }
    `)

    // Get all resources into one array
    let listItems = []
    Object.keys(data).forEach(key => {
        const contentType = key.replace('allSanity', '').toLowerCase();
        data[key].edges.forEach(obj => {
            obj.node.contentType = contentType
            listItems.push(obj.node)
        })
    })

    // Sort list by publishedAt date in reverse order
	listItems.sort((a, b) => {
	    const aDate = Date.parse(a.publishedAt),
              bDate = Date.parse(b.publishedAt)

	    if(aDate > bDate) return -1
	    if(aDate < bDate) return 1
        return 0
    })

    return (
        <Layout>
            <Container>
                <Header>
                    <h1><span>Resources</span></h1>
                </Header>

                <List>
                    {listItems.map((item, index) => {
                        return (
                         <li key={index}>
                             <ListedContent content={item} />
                         </li>
                         )
                    })}
                </List>
            </Container>
        </Layout>
    )
}
