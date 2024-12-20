import { json } from "@sveltejs/kit";
import { GetNote, SaveNote, type Note } from "$lib/server/database";

export async function GET({params}) {
    const response: Note[] = JSON.parse(JSON.stringify(await GetNote(parseInt(params.note_id))));

    return json(response);
}