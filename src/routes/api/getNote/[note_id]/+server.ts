import { json } from "@sveltejs/kit";
import { query } from "$lib/server/database";

export async function GET({params}) {
    return json(await query(`SELECT * FROM notes WHERE id = "${params.note_id}";`));
}