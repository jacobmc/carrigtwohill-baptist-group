import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Img from "gatsby-image";

export default function Header() {

	const data = useStaticQuery(graphql`
		query {
            file(relativePath: { eq: "carrigtwohill-baptist-group-logo.png" }) {
                childImageSharp {
                    fixed(width: 89, height: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
		 }
	`)

	const Header = styled.header`
		width: 100%;
		padding: 10px 0;
		border-top: 4px solid #AB2346;
	`;

	const Container = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 762px;
		margin: 0 auto;
	`;

	const Nav = styled.nav`
		display: flex;
	`;

	const Menu = styled.ul`
		display: flex;
		margin: 0;
		list-style: none;
		
		li {
			margin-left: 20px;
			
			a {
				text-decoration: none;
				color: #000;
				font-family: "Roboto", sans-serif;
				font-weight: 500;
				font-size: 14px;
			}
		}
	`;

	const Search = styled.div`
		margin-left: 36px;
		
		.search-toggle {
			background: transparent;
			padding-top: 3px;
			cursor: pointer;
			border: none;
			
			span {
				position: absolute;
				left: -9999px;
			}
		}
	`;

	// TODO add search form
	return (
		<Header>
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
					<Menu>
						<li><Link to={"/about/"}>About</Link></li>
						<li><Link to={"/news/"}>News</Link></li>
						<li><Link to={"/resources/"}>Resources</Link></li>
						<li><Link to={"/contact/"}>Contact</Link></li>
					</Menu>

					<Search>
						<button className={"search-toggle"}>
							<FaSearch />
							<span>Open Search</span>
						</button>
					</Search>
				</Nav>
			</Container>
		</Header>
	)
}
