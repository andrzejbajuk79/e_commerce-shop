import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(event);
		console.log(event.target);
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">Posiadam już konto</h2>
				<span>Zaloguj się za pomocą twojego adresu e-mail</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>

					<FormInput
						required
						label="password"
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
