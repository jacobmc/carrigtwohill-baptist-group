import React, { useState } from "react"
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const Messages = styled.div`
  		margin-bottom: 15px;
  
		p {
		  margin-bottom: 0;
		  padding: 5px 10px;
		  border-radius: 5px;
		}
  
  		.error {
		  background: #AB2346;
		  color: #fff;
		}

	    .error {
		  background: #037971;
		  color: #fff;
	    }
	`

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
	const [name, setName] = useState(''),
		[email, setEmail] = useState(''),
		[message, setMessage] = useState(''),
		recaptchaRef = React.createRef()

	const submitForm = event => {
		event.preventDefault();

		// Validate that the user completed recaptcha
		const recaptchaValue = recaptchaRef.current.getValue(),
			  msgContainer = document.getElementById('messages'),
			  errors = [],
			  messages = []

		if ( recaptchaValue === '' ) {
			errors.push('Please complete ReCAPTCHA check.');
		}

		msgContainer.innerHTML = '';

		if ( errors.length ) {
			errors.forEach( error => {
				let errorP = document.createElement('p')
				errorP.classList.add('error')
				errorP.appendChild(document.createTextNode(error))
				msgContainer.appendChild(errorP)
			})

			return;
		}

		// Send Form Data
		let formData = new FormData(event.target)

		fetch('/', {
			method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		}).then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			} else {
				messages.push('Form successfully submitted')
			}
		}).catch( error => {
	 		errors.push(error);
		})

		if ( errors.length ) {
			errors.forEach( error => {
				let errorP = document.createElement('p')
				errorP.classList.add('error')
				errorP.appendChild(document.createTextNode(error))
				msgContainer.appendChild(errorP)
			})
		}

		if ( messages.length ) {
			messages.forEach( msg => {
				let msgP = document.createElement('p')
				msgP.classList.add('success')
				msgP.appendChild(document.createTextNode(msg))
				msgContainer.appendChild(msgP)
			})
		}
	}

	return (
		<div>
			<Messages id={'messages'} />
			<Form id={'contact-form'} name={"Contact"} method={"post"} data-netlify={"true"} data-netlify-recaptcha={"true"} onSubmit={submitForm}>
				<input type={"hidden"} name={"form-name"} value={"Contact"} />

				<div className={"field"}>
					<label htmlFor={"name"}>
						<span className={"field-label"}>Name:</span>
					</label>
					<input id={"name"} name={"name"} type={"text"} value={name} onChange={e => setName(e.target.value)} required />
				</div>

				<div className="field">
					<label htmlFor={"email"}>
						<span className={"field-label"}>Email address:</span>
					</label>
					<input id={"email"} name={"email"} type={"email"} value={email} onChange={e => setEmail(e.target.value)} required />
				</div>

				<div className="field">
					<label htmlFor={"message"}>
						<span className={"field-label"}>Message:</span>
					</label>
					<textarea id={"message"} name={"message"} value={message} onChange={e => setMessage(e.target.value)} required />
				</div>

				<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} />

				<input type={"submit"} value={"Send message"} />
			</Form>
		</div>
	)
}
