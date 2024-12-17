import { mySQLConnFn } from "$lib/server/database";

let data;

export async function load({params}) {
    let mySQLConn = await mySQLConnFn();

    let results = await mySQLConn.query("SELECT * FROM note WHERE id = " + params.note_id + ";").then(([rows, fields]) => {
        return rows;
    });


    return {
        data: results,
    }
}