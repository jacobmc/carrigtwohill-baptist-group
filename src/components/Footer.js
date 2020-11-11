import React from "react";

export default function Footer() {
	return (
		<footer>
			<div className={"logo"}>
				<img src={"https://placehold.it/129x97/"} title={"Carrigtwohill Baptist Group"} alt={"Carrigtwohill Baptist Group Logo"}  />
			</div>
			<nav>
				<ul>
					<li>
						<a href={"#"}>About</a>
						<ul>
							<li><a href={"#"}>Who We Are</a></li>
							<li><a href={"#"}>What We Believe</a></li>
							<li><a href={"#"}>Bible Study</a></li>
							<li><a href={"#"}>Events & Community Involvement</a></li>
						</ul>
					</li>
				</ul>

				<ul>
					<li><a href={"#"}>News</a></li>
					<li><a href={"#"}>Resources</a></li>
					<li><a href={"#"}>Contact</a></li>
				</ul>
			</nav>
			<div className={"social"}>
				<ul>
					<li><a href={"#"}>Facebook</a></li>
					<li><a href={"#"}>Instagram</a></li>
					<li><a href={"#"}>YouTube</a></li>
				</ul>
			</div>
			<div className="copy">
				<p>&copy; 2020 Carrigtwohill Baptist Group • <a href={"#"}>Privacy Policy</a> • <a href={"#"}>Sitemap</a> • <a href={"#"}>Website Design</a></p>
			</div>
		</footer>
	)
}
