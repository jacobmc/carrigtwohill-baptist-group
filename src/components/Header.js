import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import Img from "gatsby-image"
import Navigation from "./Navigation";

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
      allSanityMenu(filter: {sanityId: {eq: "main"}}) {
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

  const currentPage = window.location.pathname.replace(/\//g, '')

  // Renders link using anchor tag if menu item goes to external source
  const renderLink = menuItem => {
    if(menuItem.menuItemUrl.externalContent) {
      return <a href={"/" + menuItem.menuItemUrl.linkUrl}>{menuItem.text}</a>
    }

    return <Link to={"/" + menuItem.menuItemUrl.linkUrl}>{menuItem.text}</Link>
  }

  // Renders the submenu if it exists for menu item
  const renderSubmenu = menuItem => {
    if(menuItem.submenuItems.length) {
      return (
          <ul>
            {menuItem.submenuItems.map((submenuItem, index) => {
              return <li key={index} className={(currentPage === submenuItem.menuItemUrl.linkUrl) ? 'active' : ''}>{renderLink(submenuItem)}</li>
            })}
          </ul>
      )
    }
  }

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

  const Menu = styled(Navigation)`
    display: flex;
    margin: 0;
    list-style: none;

    li {
      position: relative;
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

      ul {
        position: absolute;
        display: none;
        width: 200px;
        margin: 0;
        padding: 5px 10px;
        background: #fafafa;
        list-style: none;
        border: 1px solid #ccc;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.15);
        z-index: 1000;

        li {
          margin: 0;

          a {
            font-size: 16px;
          }

          &.active {
            a {
              border-bottom: 3px solid #AB2346;
            }
          }
        }

        &:hover { display: block; }
      }

      &.active {
        > a {
          border-bottom: 3px solid #AB2346;
        }
      }

      &:hover {
        ul {
          display: block;
        }
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
          {/*<Menu>*/}
          {/*  {data.allSanityMenu.edges[0].node.menuItems.map( (menuItem, index) => {*/}
          {/*    return (*/}
          {/*        <li key={index} className={(currentPage === menuItem.menuItemUrl.linkUrl) ? 'active' : ''}>*/}
          {/*          {renderLink(menuItem)}*/}
          {/*          {renderSubmenu(menuItem)}*/}
          {/*        </li>*/}
          {/*    )*/}
          {/*  })}*/}
          {/*</Menu>*/}

          <Menu menu={data.allSanityMenu.edges[0].node} currentPage={currentPage} />

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
