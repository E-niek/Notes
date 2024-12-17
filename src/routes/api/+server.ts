import { json } from "@sveltejs/kit";
import { mySQLConnFn } from "$lib/server/database";

export async function POST({request}) {
    let id = await request.json();
    id = 0;
    let mySQLConn = await mySQLConnFn();    
    let results = await mySQLConn.query("SELECT * FROM note WHERE id = " + id + ";").then(function([rows, fields]) {
        return rows;
    });

    return json(results);
}