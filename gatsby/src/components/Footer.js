import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa"
import styled from "styled-components"
import Img from "gatsby-image"
import Navigation from "./Navigation";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "carrigtwohill-baptist-group-logo-black.png" }) {
        childImageSharp {
          fixed(width: 162, height: 122) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allSanityMenu(
        filter: {sanityId: {in: ["footer-left", "footer-right"]}}
        sort: {fields: [sanityId], order:ASC}
      ) {
        edges {
          node {
            id
            title
            sanityId
            menuItems {
              text
              menuItemUrl {
                externalContent
                linkUrl
              }
              submenuItems {
                text
                menuItemUrl {
                  externalContent
                  linkUrl
                }
              }
            }
          }
        }
      }
    }
  `)

  const Footer = styled.footer`
    background: #cad8de;
  `

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 23px 0 36px 0;
    max-width: 744px;
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      
      .logo {
        order: 2;
      }
    }
  `

  const Nav = styled.nav`
    display: flex;

    ul {
      max-width: 150px;
      margin: 0;
      list-style: none;

      li {
        margin-bottom: 0;

        a {
          color: #000;
          font-family: "Roboto", sans-serif;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-decoration: none;
        }
      }

      ul {
        margin-top: 10px;

        li {
          display: flex;
          margin-bottom: 15px;
          line-height: 1.25;

          a {
            font-size: 14px;
            font-weight: 300;
          }
        }
      }

      &:first-child {
        margin-right: 20px;
      }
    }
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      order: 1;
      margin-bottom: 25px;
    }
  `

  const Social = styled.div`
    ul {
      display: flex;
      margin: 0;
      list-style: none;

      li {
        margin-left: 17px;
        font-size: 30px;

        a {
          color: #000;
        }
      }
    }
    
    /* Small only */
    @media screen and (max-width: 39.9375em) {
      order: 3;
    }
  `

  const Copy = styled.div`
    background: #262322;
    padding: 9px 0;
    color: #fff;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 14px;

    p {
      margin: 0;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  `

  return (
    <Footer>
      <Container>
        <div className={"logo"}>
          <Link to={"/"}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              title={"Carrigtwohill Baptist Group"}
              alt={"Carrigtwohill Baptist Group Logo"}
            />
          </Link>
        </div>

        <Nav>
          {data.allSanityMenu.edges.map(menu => {
            return <Navigation key={menu.node.id} menu={menu.node} currentPage={''} />
          })}
        </Nav>

        <Social>
          <ul>
            <li>
              <a
                href={"https://www.facebook.com/carrigtwohillbaptist/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaFacebookSquare /> <span className={"sr-only"}>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.instagram.com/carrigtwohill_baptist_group/?hl=en"
                }
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaInstagram /> <span className={"sr-only"}>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href={
                  "https://www.youtube.com/channel/UC2ZLp-psGQzrUDdwgvCLqVw/"
                }
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaYoutubeSquare /> <span className={"sr-only"}>YouTube</span>
              </a>
            </li>
          </ul>
        </Social>
      </Container>

      <Copy>
        <p>
          &copy; 2020 Carrigtwohill Baptist Group •{" "}
          <Link to={"/privacy-policy"}>Privacy Policy</Link> • <Link to={"/sitemap"}>Sitemap</Link> •{" "}
          <a href={"https://jacobmckinney.com/"} target={"_blank"} rel={"noreferrer"}>Website Design</a>
        </p>
      </Copy>
    </Footer>
  )
}
