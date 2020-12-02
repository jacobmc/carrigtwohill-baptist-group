import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import styled from "styled-components";
import Img from "gatsby-image";

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
        }
	`)

	const Footer = styled.footer`
		background: #CAD8DE;
	`;

	const Container = styled.div`
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		padding: 23px 0 36px 0;
		max-width: 744px;
	`;

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
			
			&:first-child { margin-right: 20px;}
		}
	`;

	const Social = styled.div`
		ul {
			display: flex;
			margin: 0;
			list-style: none;
			
			li {
				margin-left: 17px;
				font-size: 30px;
				
				a { color: #000; }
			}
		}
	`;

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
	`;

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
					<ul>
						<li>
							<Link to={"/about/"}>About</Link>
							<ul>
								<li><a href={"#"}>Who We Are</a></li>
								<li><a href={"#"}>What We Believe</a></li>
								<li><a href={"#"}>Bible Study</a></li>
								<li><a href={"#"}>Events & Community Involvement</a></li>
							</ul>
						</li>
					</ul>

					<ul>
						<li><Link to={"/news/"}>News</Link></li>
						<li><Link to={"/resources/"}>Resources</Link></li>
						<li><Link to={"/contact/"}>Contact</Link></li>
					</ul>
				</Nav>

				<Social>
					<ul>
						<li><a href={"https://www.facebook.com/carrigtwohillbaptist/"} target={"_blank"}><FaFacebookSquare /> <span className={"sr-only"}>Facebook</span></a></li>
						<li><a href={"https://www.instagram.com/carrigtwohill_baptist_group/?hl=en"} target={"_blank"}><FaInstagram /> <span className={"sr-only"}>Instagram</span></a></li>
						<li><a href={"https://www.youtube.com/channel/UC2ZLp-psGQzrUDdwgvCLqVw/"} target={"_blank"}><FaYoutubeSquare /> <span className={"sr-only"}>YouTube</span></a></li>
					</ul>
				</Social>
			</Container>

			<Copy>
				<p>&copy; 2020 Carrigtwohill Baptist Group • <a href={"#"}>Privacy Policy</a> • <a href={"#"}>Sitemap</a> • <a href={"#"}>Website Design</a></p>
			</Copy>
		</Footer>
	)
}
