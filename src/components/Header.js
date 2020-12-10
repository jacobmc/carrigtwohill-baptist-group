import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import Img from "gatsby-image"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "carrigtwohill-baptist-group-logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Header = styled.header`
    width: 100%;
    padding: 10px 0;
    border-top: 5px solid #ab2346;
  `

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 954px;
    margin: 0 auto;
  `

  const Logo = styled(Img)`
    min-width: 112px;
    min-height: 84px;

    img {
      width: 100%;
      height: 100%;
    }
  `

  const Nav = styled.nav`
    display: flex;
  `

  const Menu = styled.ul`
    display: flex;
    margin: 0;
    list-style: none;

    li {
      margin-left: 20px;
      margin-bottom: 0;

      a {
        text-decoration: none;
        color: #000;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.5px;
      }
    }
  `

  const Search = styled.div`
    margin-left: 36px;

    .search-toggle {
      background: transparent;
      padding-top: 3px;
      cursor: pointer;
      border: none;
    }
  `

  // TODO add search form
  return (
    <Header>
      <Container>
        <div className={"logo"}>
          <Link to={"/"}>
            <Logo
              fluid={data.file.childImageSharp.fluid}
              title={"Carrigtwohill Baptist Group"}
              alt={"Carrigtwohill Baptist Group Logo"}
            />
          </Link>
        </div>
        <Nav>
          <Menu>
            <li>
              <Link to={"/about/"}>About</Link>
            </li>
            <li>
              <Link to={"/news/"}>News</Link>
            </li>
            <li>
              <Link to={"/resources/"}>Resources</Link>
            </li>
            <li>
              <Link to={"/contact/"}>Contact</Link>
            </li>
          </Menu>

          <Search>
            <button className={"search-toggle"}>
              <FaSearch />
              <span className={"sr-only"}>Open Search</span>
            </button>
          </Search>
        </Nav>
      </Container>
    </Header>
  )
}
