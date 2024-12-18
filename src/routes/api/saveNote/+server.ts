import { json } from "@sveltejs/kit";
import { SaveNote, type Note } from "$lib/server/database";

export async function POST({request}) {
    const {noteData} = await request.json(); 
    const response: Note[] = JSON.parse(JSON.stringify(await SaveNote(noteData)));

    console.log("RETURN: " + response[0].id);
    console.log("1: " + json(response));

    return json(response);
}