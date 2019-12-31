import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = event => {
		const { value, name } = event;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>Posiadam już konto</h2>
				<span>Zaloguj się za pomocą twojego adresu e-mail</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="email"
						value={this.state.email}
						handleChange={this.handleChange}
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

					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default SignIn;
