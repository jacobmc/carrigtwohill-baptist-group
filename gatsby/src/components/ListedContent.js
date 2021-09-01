import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ListedContent({content}) {
	// Build type specific elements
	let url = '/',
		buttonText = 'Read More',
		summary = '',
		summaryLength = 25
	switch (content.contentType) {
		case 'news':
			url = '/news/'
			summary = content.body[0].children[0].text
			break
		case 'article':
			url = '/articles/'
			summary = content.body[0].children[0].text
			break
		case 'video':
			url = '/videos/'
			buttonText = 'Watch Now'
			summary = content.description[0].children[0].text
			break
		case 'event':
			url = '/events/'
			buttonText = 'Learn More'
			summary = content.description[0].children[0].text
			break
		default:
			url = '/'
	}
	url += content.slug.current
	summary = ( summary.split(" ").length > summaryLength ) ? summary.split(" ").splice(0, summaryLength).join(" ") + '...' : summary.split(" ").splice(0, summaryLength).join(" ")

	// TODO fix styled component errors

	const Article = styled.article`
	  display: flex;
	  padding: 50px 0;
	  align-items: center;
	  
	  figure {
	  	margin: 0 25px 0 0;
	  	
		img {
			max-width: 300px;
		}
	  }
	  
	  section {
	  	h2 {
	  		a {
	  			text-decoration: none;
	  			color: #262322;
	  		}
	  		
	  		margin-bottom: 15px;
	  	}
	  	
	  	p {
	  		margin-bottom: 20px;
	  		line-height: 24px;
	  		max-width: 700px;
	  	}
	  }
	  
	  /* Small only */
	  @media screen and (max-width: 39.9375em) {
	  	padding: 25px 0;
	  	flex-direction: column;
	  	
	  	figure {
		  margin: 0 0 15px 0;
		  
		  img {
		    max-width: 100%;
		  }
	  	}
	  	
	    h2 {
		  font-size: 1.5rem;
	    }
	  }
	`

	console.log( summary );
	console.log(content);
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
				<p>{summary}</p>
				<Link to={url}>{buttonText}</Link>
			</section>
		</Article>
	)
}
