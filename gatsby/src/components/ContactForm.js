import React, { useState } from "react"
import styled from "styled-components";

const Form = styled.form`
		max-width: 600px;
		
		.hidden {
			display: none;
		}
		
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

export default function ContactForm() {
	const [botField, setBotField] = useState(''),
		[name, setName] = useState(''),
		[email, setEmail] = useState(''),
		[message, setMessage] = useState('')

	return (
		<Form name={"contact"} method={"POST"} netlify netlify-honeypot={"bot-field"}>
			<div className={"hidden"}>
				<label htmlFor={"bot-field"}>
					<span className={"field-label"}>Don't fill this out if you are human:</span>
				</label>
				<input name={"bot-field"} type={"text"} value={botField} onChange={e => setBotField(e.target.value)} />
			</div>

			<div className={"field"}>
				<label htmlFor={"name"}>
					<span className={"field-label"}>Name:</span>
				</label>
				<input id={"name"} name={"name"} type={"text"} value={name} onChange={e => setName(e.target.value)} />
			</div>

			<div className="field">
				<label htmlFor={"email"}>
					<span className={"field-label"}>Email address:</span>
				</label>
				<input id={"email"} name={"email"} type={"email"} value={email} onChange={e => setEmail(e.target.value)} />
			</div>

			<div className="field">
				<label htmlFor={"message"}>
					<span className={"field-label"}>Message:</span>
				</label>
				<textarea id={"message"} name={"message"} value={message} onChange={e => setMessage(e.target.value)} />
			</div>

			<div data-netlify-recaptcha={"true"} />

			<input type={"submit"} value={"Send message"} />
		</Form>
	)
}
