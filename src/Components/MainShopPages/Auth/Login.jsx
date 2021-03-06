import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import Footer from "../../../Components/Footer/Footer";
import Logo from "../../../Images/logo6.png";
import "./Login.css";

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const loginSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/user/login", { ...user });
			localStorage.setItem("firstLogin", true);
			window.location.href = "/";
		} catch (err) {
			alert(err.response.data.msg);
		}
	};

	return (
		<div id="login-page-container">
			<div className="login-page">
				<Link to="/">
					<img className="brand" src={Logo} alt="brand-name" />
				</Link>
				<form onSubmit={loginSubmit}>
					<h2 className="login-title">Sign in to your account</h2>
					<p></p>
					<label htmlFor="e-mail">E-mail</label>
					<input
						type="email"
						name="email"
						id="e-mail"
						required
						placeholder="Your e-mail address"
						value={user.email}
						onChange={onChangeInput}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						autoComplete="on"
						placeholder="Enter your password"
						value={user.password}
						onChange={onChangeInput}
					/>

					<div className="row">
						<button type="submit">Login</button>
						<div>
							Not yet signed up? <Link to="/register">Sign up here!</Link>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
