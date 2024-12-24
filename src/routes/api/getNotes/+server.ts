import { json } from "@sveltejs/kit";
import { query } from "$lib/server/database";

export async function GET() {
    return json(await query(`SELECT id, user_id, DATE_FORMAT(created, "%Y-%m-%d") AS "created", title, text FROM notes ORDER BY created DESC;`));
}