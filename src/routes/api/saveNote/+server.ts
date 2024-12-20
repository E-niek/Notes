import { json } from "@sveltejs/kit";
import { SaveNote, type Note } from "$lib/server/database";

export async function POST({request}) {
    const {noteTitle, noteText} = await request.json(); 
    const response: Note[] = JSON.parse(JSON.stringify(await SaveNote(noteTitle, noteText)));

    return json(response);
}