import React from "react";

export default function Header() {
	return (
		<header>
			<div className={"logo"}>
				<img src={"https://placehold.it/89x75/"} title={"Carrigtwohill Baptist Group"} alt={"Carrigtwohill Baptist Group Logo"}  />
			</div>
			<nav>
				<ul>
					<li><a href={"#"}>About</a></li>
					<li><a href={"#"}>News</a></li>
					<li><a href={"#"}>Resources</a></li>
					<li><a href={"#"}>Contact</a></li>
				</ul>

				<div className={"search"}>
					<button className={"search-toggle"}>Open Search</button>
				</div>
			</nav>
		</header>
	)
}
