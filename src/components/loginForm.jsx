import React, { Component } from "react";
class LoginForm extends Component {
	state = {
		account: {
			userName: "",
			password: "",
		},
	};
	handleChange = e => {
		const account = { ...this.state.account };
		account[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ account });
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log("submitted");
	};
	render() {
		const { userName, password } = this.state.account;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							onChange={this.handleChange}
							value={userName}
							id="username"
                            type="text"
                            name="userName"
							className="form-control"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
							placeholder="Password"
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
