import { json } from "@sveltejs/kit";
import { query } from "$lib/server/database";
import { randomUUID } from "crypto";

export async function POST({request}) {
    const {noteTitle, noteText} = await request.json(); 
    const _noteTitle = noteTitle === "" ? "{No title}" : noteTitle;
    
    const _randomUUID = randomUUID();
    const response = await query(`INSERT INTO notes(id, title, text) VALUES("${_randomUUID}", "${_noteTitle}", "${noteText}");`);

    return json({id: _randomUUID});
}