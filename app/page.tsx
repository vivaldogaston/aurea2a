import Image from "next/image";

export default function Home() {
	return (
		<div className="wrapper">
			<p>Avalie o nosso atendimento</p>
			<label>Nome</label>
			<input type="text" placeholder="Nome" className="textBox"></input>
			<label>Telefone</label>
			<input type="text" placeholder="Nome" className="textBox"></input>
			<label>Comentários</label>
			<textarea
				placeholder="Nome"
				className="textBox textarea"
			></textarea>
			<button>Enviar</button>
		</div>
	);
}
