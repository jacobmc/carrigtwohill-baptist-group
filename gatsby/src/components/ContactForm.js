import React from "react"
import styled from "styled-components";

export default function ContactForm() {
	const Form = styled.form`
		max-width: 600px;
		
		.field {
			display: grid;
			grid-template-columns: 1fr;
			margin-bottom: 25px;
			
			label {
				.field-label {
					font-weight: 500;
					font-size: 1.125rem;
				}
			}
		}
		
		input[type=submit] {
			display: block;
			width: 100%;
			max-width: 200px;
			background: #037971;
			margin-top: 50px;
			padding: 5px;
			color: #E8FFFF;
			text-align: center;
			text-decoration: none;
			font-family: "Roboto", sans-serif;
			font-size: 1.125rem;
			border-radius: 8px;
			border: none;
		}
	`

	return (
		<Form name={"contact"} method={"POST"} netlify>
			<div className={"field"}>
				<label htmlFor={"name"}>
					<span className={"field-label"}>Name:</span>
				</label>
				<input id={"name"} name={"name"} type={"text"} value={""} />
			</div>

			<div className="field">
				<label htmlFor={"email"}>
					<span className={"field-label"}>Email address:</span>
				</label>
				<input id={"email"} name={"email"} type={"email"} value={""} />
			</div>

			<div className="field">
				<label htmlFor={"message"}>
					<span className={"field-label"}>Message:</span>
				</label>
				<textarea id={"message"} name={"message"} />
			</div>

			<div data-netlify-recaptcha={"true"} />

			<input type={"submit"} value={"Send message"} />
		</Form>
	)
}
