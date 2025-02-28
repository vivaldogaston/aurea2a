"use client";
import Image from "next/image";
import logo from "@/app/imgs/aurea logo.png";
import { useState } from "react";

import Link from "next/link";
export default function Home() {
	const [name, setName] = useState("");
	const [telefone, setTelefone] = useState("");
	const [comment, setComment] = useState("");
	const Log = () => {
		console.log(name);
		console.log(telefone);
		console.log(comment);
	};
	return (
		<div className="h-screen grid place-items-center border-0">
			<div>
				<Image
					src={logo}
					alt="AUREA SDVM, S.A."
					className="image place-self-center"
				/>
				<p className="text-center">A sua parceira no mercado de capitais</p>
				<p className="text-center size20 margin-top">
					Obrigado por avaliar o nosso atendimento.
				</p>
			</div>
		</div>
	);
}
