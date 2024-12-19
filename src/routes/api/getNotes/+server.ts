import { json } from "@sveltejs/kit";
import { GetNote, GetNotes, SaveNote, type Note } from "$lib/db/database";

export async function GET({request}) {
    const response: Note[] = JSON.parse(JSON.stringify(await GetNotes()));

    return json(response);
}