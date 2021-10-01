import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

const SearchButton = styled.button`
  background: transparent;
  padding-top: 3px;
  cursor: pointer;
  border: none; 
`

const SearchPanel = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 10000;
  
  .search-container {
	position:relative;
	background: #fff;
	width: 100%;
	max-width: 600px;
	border-radius: 15px;
	overflow: hidden;
	padding: 50px 25px;
	
	.close {
	  position: absolute;
	  top: 5px;
	  right: 20px;
	  opacity: 0.5;
	  background: none;
	  border: none;
	}
  }
  
  .ais-SearchBox {
	.ais-SearchBox-form {
	  &::before {
	    background-repeat: no-repeat;	  
	  }
	  
	  input {
		width: calc(100% - 50px);	  
		height: 50px;
	  }
	  button {
		width: 50px;
		height: 50px;
	  }
	}
  }
  .ais-Hits {
	max-height: 500px;
	overflow: scroll;
	
	.ais-Hits-item {
	  padding: 0.5rem;
	  box-shadow: none;
	  font-size: 24px;
	}
  }
  
  &.open {
	display: flex;
  }
`

export default function Search() {
	const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY)

	let searchPanel = ''

	console.log( isBrowser )

	if ( isBrowser ) {
		searchPanel = document.getElementById("search-overlay")
	}

	console.log( searchPanel )

	const openSearchPanel = () => {
		if ( searchPanel !== '' && searchPanel !== null ) {
			searchPanel.classList.add('open')
		}
	}

	const closeSearchPanel = () => {
		searchPanel.classList.remove('open')
	}

	const Hit = ({hit}) => <a href={hit.url}>{hit.title}</a>

	// TODO Set initial results to be empty and add message for no results

	return (
		<div>
			<SearchButton className={"search-toggle"} onClick={openSearchPanel}>
				<FaSearch />
				<span className={"sr-only"}>Open Search</span>
			</SearchButton>
			<SearchPanel id={"search-overlay"}>
				<div className={"search-container"}>
					<button className={"close"} aria-label="Close search panel" type="button" onClick={closeSearchPanel}>
						<span aria-hidden="true">Close <span style={{fontSize: 25 + 'px'}}>&times;</span></span>
					</button>
					<InstantSearch searchClient={searchClient} indexName={"netlify_ae06d06d-e53b-4e86-a343-0285a6856e91_main_all"}>
						<SearchBox />
						<Hits hitComponent={Hit} />
					</InstantSearch>
				</div>
			</SearchPanel>
		</div>
	)
}
