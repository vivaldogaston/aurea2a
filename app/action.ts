import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

const supabase = createClient();
interface Props {
	name: string;
	telefone: string;
	comment: string;
	qrcode: string;
}
export const Insert = async (rating: Props) => {
	try {
		const { error, count, data } = await supabase.from("rating").insert(rating);
		console.log(count);
		console.log(count);
		if (error) throw new Error(error.message);
		alert("Obrigado por avaliar o nosso atendimento");
		redirect("/success");
	} catch (error) {
		console.log(error);
	}
};
