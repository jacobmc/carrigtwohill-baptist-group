import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ListedContent({content}) {
	console.log(content)

	// Build type specific elements
	let url = '/',
		buttonText = 'Read More'
	switch (content.contentType) {
		case 'news':
			url = '/news/'
			break
		case 'article':
			url = '/articles/'
			break
		case 'video':
			url = '/videos/'
			buttonText = 'Watch Now'
			break
		case 'event':
			url = '/events/'
			buttonText = 'Learn More'
			break
	}
	url += content.slug.current

	const Article = styled.article`
	  display: flex;
	  padding: 50px 0;
	  align-items: center;
	  
	  figure {
	    position: relative;
	  	margin: 0 25px 0 0;
	  	
	  	
		img {
			display: block;
			max-width: 300px;
			object-fit: cover;
		}
	  	
	  	&::after {
		  position: absolute;
		  top: 0;
		  left: 0;
		  display: block;
		  content: "";
		  height: 100%;
		  width: 100%;
		  box-shadow: inset 0px 0px 10px #eaeaea;
		}
	  }
	  
	  section {
	  	h2 {
	  		a {
	  			text-decoration: none;
	  			color: #262322;
	  		}
	  	}
	  }
	`
	return (
		<Article>
			{content.featuredImage !== null &&
			<Link to={url}>
				<figure>
					<img
						src={content.featuredImage.asset.url}
						alt={content.featuredImage.alt}
						title={content.featuredImage.title}
					/>
				</figure>
			</Link>
			}
			<section>
				<h2><Link to={url}>{content.title}</Link></h2>
				<p>Description</p>
				<Link to={url}>{buttonText}</Link>
			</section>
		</Article>
	)
}
