import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
interface Props {
	nome: string;
	telefone: string;
	comment: string;
}
export const Insert = async (rating: Props) => {
	try {
		const { error, count, data } = await supabase.from("rating").insert(rating);
		console.log(count);
		console.log(count);
		if (error) throw new Error(error.message);
	} catch (error) {
		console.log(error);
	}
};
