import Image from "next/image";
import logo from "@/app/imgs/aurea logo.png";
import satisfeito from "@/app/imgs/faces/satisfeito.png";
import insatisfeito from "@/app/imgs/faces/insatisfeito.png";
import mInsatisfeito from "@/app/imgs/faces/muito insatisfeito.png";
import mSatisfeito from "@/app/imgs/faces/muito satisfeito.png";
import neutro from "@/app/imgs/faces/neutro.png";
export default function Home() {
	return (
		<div className="">
			<Image
				src={logo}
				alt="AUREA SDVM, S.A."
				className="image place-self-center"
			/>
			<p className="text-center text-black mb-7">Avalie o nosso atendimento</p>
			<div className="wrapper">
				<label>Nome</label>
				<input type="text" placeholder="Nome" className="textBox"></input>
				<label>Telefone</label>
				<input type="text" placeholder="92XXXXXXXX" className="textBox"></input>
				<label>Comentários</label>
				<textarea placeholder="Nome" className="textBox textarea"></textarea>
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
				<button>Enviar</button>
			</div>
		</div>
	);
}
