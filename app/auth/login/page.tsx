"use client";
import { useState } from "react";
import { login, signup } from "./actions";

export default function LoginPage() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<form className="flex flex-col gap-2">
			<label>Nome</label>
			<input
				type="text"
				placeholder="Nome"
				className="textBox"
				onChange={(e) => setNome(e.target.value)}
				value={nome}
				required
			></input>
			<label htmlFor="email">Email:</label>
			<input
				id="email"
				name="email"
				type="email"
				className="textBox"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			/>
			<label htmlFor="password">Password:</label>
			<input
				id="password"
				name="password"
				type="password"
				className="textBox"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required
			/>
			<button formAction={login}>Log in</button>
			<button formAction={signup}>Sign up</button>
		</form>
	);
}
