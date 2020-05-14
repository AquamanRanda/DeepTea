import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import firebase from '../../../../src/firebaseconfig';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js';

const useStyles = makeStyles(styles);

export default function WorkSection() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phno, setphno] = useState('');
	const [message, setMessage] = useState('');

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		console.log('i ran');

		const db = firebase.firestore();
		try {
			await db.collection('contactDetails').add({
				name,
				email,
				phno,
				message,
			});
			console.log('Message sent successfully');
		} catch (err) {
			console.error(err);
		}
	};

	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer justify='center'>
				<GridItem cs={12} sm={12} md={8}>
					<h2 className={classes.title}>Talk to Us</h2>
					<h4 className={classes.description}>
						Divide details about your product or agency work into
						parts. Write a few lines about each one and contact us
						about any further collaboration. We will responde get
						back to you in a couple of hours.
					</h4>
					<form onSubmit={onSubmitHandler}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<CustomInput
									inputProps={{
										onChange: (evt) => {
											setName(evt.target.value);
										},
										value: name,
									}}
									labelText='Your Name'
									id='name'
									formControlProps={{
										fullWidth: true,
									}}
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<CustomInput
									inputProps={{
										onChange: (evt) => {
											setEmail(evt.target.value);
										},
										value: email,
									}}
									labelText='Your Email'
									id='email'
									formControlProps={{
										fullWidth: true,
									}}
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<CustomInput
									inputProps={{
										onChange: (evt) => {
											setphno(evt.target.value);
										},
										value: phno,
									}}
									labelText='Contact Number'
									id='phno'
									formControlProps={{
										fullWidth: true,
									}}
								/>
							</GridItem>
							<CustomInput
								labelText='Your Message'
								id='message'
								formControlProps={{
									onChange: (evt) => {
										setMessage(evt.target.value);
									},
									value: message,
									fullWidth: true,
									className: classes.textArea,
								}}
								inputProps={{
									multiline: true,
									rows: 5,
								}}
							/>
							<GridContainer justify='center'>
								<GridItem
									xs={12}
									sm={12}
									md={4}
									className={classes.textCenter}>
									<Button type='submit' color='primary'>
										Send Message
									</Button>
								</GridItem>
							</GridContainer>
						</GridContainer>
					</form>
				</GridItem>
			</GridContainer>
		</div>
	);
}
