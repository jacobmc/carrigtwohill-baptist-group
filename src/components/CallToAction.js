import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

export default function CallToAction() {
	const data = useStaticQuery(graphql`
		query {
            file(relativePath: { eq: "group-pic.png" }) {
                childImageSharp {
                    fixed(width: 530, height: 343) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
		 }
	`)

	const CTA = styled.div`
		margin: 45px auto;
		max-width: 762px;
	`
	const Image = styled(Img)`
		img { 
			position: relative;
			margin: 0;
			z-index: 1;
			
			&::after {
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				content: '';
				height: 100%;
				width: 100%;
				box-shadow: inset 0px 0px 10px #EAEAEA;
				z-index: 10;
			}
		}
	`

	return(
		<CTA>
			<Image
				fixed={data.file.childImageSharp.fixed}
				title={"Bible Study Group Photo"}
				alt={"Photo of the bible study group at a member's home"}
			/>
		</CTA>
	)
}
