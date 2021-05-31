import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

export default function Search() {
	const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY)

	let searchPanel = ''

	if ( isBrowser ) {
		searchPanel = document.getElementById("search-panel")
	}

	const openSearchPanel = () => {
		searchPanel.classList.add('open')
		console.log("search panel opened!")
	}

	const closeSearchPanel = () => {
		searchPanel.classList.remove('open')
	}

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
	  
	  .ais-SearchBox {
	  	width: 90%;
	  	max-width: 600px;
	  	
	  	form {
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
	  .ais-Hits {}
	  
	  &.open {
	  	display: flex;
	  }
	`

	return (
		<div>
			<SearchButton className={"search-toggle"} onClick={openSearchPanel}>
				<FaSearch />
				<span className={"sr-only"}>Open Search</span>
			</SearchButton>
			<SearchPanel id={"search-panel"}>
				<InstantSearch searchClient={searchClient} indexName={"test"}>
					<SearchBox />
					<Hits />
				</InstantSearch>
			</SearchPanel>
		</div>
	)
}
