import { json } from "@sveltejs/kit";
import { GetNote, GetNotes, SaveNote, type Note } from "$lib/server/database";

export async function GET() {
    const response: Note[] = JSON.parse(JSON.stringify(await GetNotes()));

    return json(response);
}