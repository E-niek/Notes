import { json } from "@sveltejs/kit";
import { GetNote, SaveNote, type Note } from "$lib/db/database";

export async function POST({request}) {
    const {id} = await request.json(); 
    const response: Note[] = JSON.parse(JSON.stringify(await GetNote(id)));

    return json(response);
}