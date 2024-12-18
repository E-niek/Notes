import { json } from "@sveltejs/kit";
import mysql from "mysql2/promise"

let mySQLConn = null;

export type Note = {
    id: number;
    user_id: number;
    data: string;
};

export function mySQLConnFn() {
    const mySQLConn = mysql.createConnection({
        host: "localhost",
        user: "notes",
        password: "notesdb1234",
        database: "Notes",
    });

    return mySQLConn;
}

export async function SaveNote(noteData: string) {
    let mySQLConn = await mySQLConnFn();

    await mySQLConn.query(`INSERT INTO note(data) VALUES("${noteData}");`);
    let rows = await mySQLConn.query(`SELECT * FROM note WHERE id = @@Identity;`).then(([rows, fields]) => {
        return rows;
    });

    console.log

    return rows;
}