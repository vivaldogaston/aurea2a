"use client";
import Image from "next/image";
import logo from "@/app/imgs/aurea logo.png";
import satisfeito from "@/app/imgs/faces/satisfeito.png";
import insatisfeito from "@/app/imgs/faces/insatisfeito.png";
import mInsatisfeito from "@/app/imgs/faces/muito insatisfeito.png";
import mSatisfeito from "@/app/imgs/faces/muito satisfeito.png";
import neutro from "@/app/imgs/faces/neutro.png";
import Link from "next/link";
import { Insert } from "@/app/action";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Avaliacao() {
	const [name, setName] = useState("");
	const [telefone, setTelefone] = useState("");
	const [comment, setComment] = useState("");
	const codigo = useParams() as Record<string, string | string[]> | null;
	console.log(codigo);
	return (
		<div className="h-screen grid place-items-center border-0">
			<div>
				<Image
					src={logo}
					alt="AUREA SDVM, S.A."
					className="image place-self-center"
				/>
				<p className="text-center text-black mb-7">
					Avalie o nosso atendimento
				</p>
				<div className="wrapper">
					<label>Nome</label>
					<input
						type="text"
						placeholder="Nome"
						className="textBox"
						onChange={(e) => setName(e.target.value)}
						value={name}
					></input>
					<label>Telefone</label>
					<input
						type="text"
						placeholder="92XXXXXXXX"
						className="textBox"
						onChange={(e) => setTelefone(e.target.value)}
						value={telefone}
					></input>
					<label>Comentários</label>
					<textarea
						placeholder="Fui bem atentido..."
						className="textBox textarea"
						onChange={(e) => setComment(e.target.value)}
						value={comment}
					></textarea>
					<label>Você está satfisfeito com o meu atendimento?</label>
					<div className="ratingWrapper flex justify-between gap-6">
						<div className="flex-col place-items-center cursor-pointer">
							<Image
								src={mInsatisfeito}
								alt="Muito Insatisfeito"
								className="image"
								width={40}
							/>
							<label>Muito Insatisfeito</label>
						</div>
						<div className="flex-col place-items-center cursor-pointer">
							<Image
								src={insatisfeito}
								alt="insatisfeito"
								className="image"
								width={40}
							/>
							<label>Insatisfeito</label>
						</div>
						<div className="flex-col place-items-center cursor-pointer">
							<Image src={neutro} alt="neutro" className="image" width={40} />
							<label>Neutro</label>
						</div>
						<div className="flex-col place-items-center cursor-pointer">
							<Image
								src={satisfeito}
								alt="satisfeito"
								className="image"
								width={40}
							/>
							<label>Satisfeito</label>
						</div>
						<div className="flex-col place-items-center cursor-pointer">
							<Image
								src={mSatisfeito}
								alt="Muito Satisfeito"
								className="image"
								width={40}
							/>
							<label>Muito Satisfeito</label>
						</div>
					</div>
					<button
						onClick={() => {
							if (codigo) {
								Insert({ name, telefone, comment, qrcode: codigo.toString() });
							} else {
								console.error("Código is null");
								alert("Codigo is null");
							}
						}}
					>
						Enviar
					</button>
				</div>
			</div>
		</div>
	);
}
