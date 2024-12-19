import { json } from "@sveltejs/kit";
import { SaveNote, type Note } from "$lib/db/database";

export async function POST({request}) {
    const {language, noteTitle, noteText} = await request.json(); 
    const response: Note[] = JSON.parse(JSON.stringify(await SaveNote(language, noteTitle, noteText)));

    return json(response);
}