import mysql from "mysql2/promise"
import {dbHost, dbDb, dbUser, dbPassword} from "$env/static/private"

export type Note = {
    id: number;
    user_id: number;
    created: string;
    title: string;
    text: string;
};

const tableNotes = "notes";

export function dbConn() {
    const _db = mysql.createConnection({
        host: dbHost,
        database: dbDb,
        user: dbUser,
        password: dbPassword,
    });

    return _db;
}

export async function SaveNote(noteTitle: string, noteText: string) {
    const conn = await dbConn();

    await conn.query(`INSERT INTO ${tableNotes}(title, text) VALUES("${noteTitle}", "${noteText}");`);
    const rows = await conn.query(`SELECT * FROM ${tableNotes} WHERE id = @@Identity;`).then(([rows]) => {
        return rows;
    });

    return rows;
}

export async function GetNote(id: number) {
    const conn = await dbConn();

    const rows = await conn.query(`SELECT * FROM ${tableNotes} WHERE id = ${id};`).then(([rows]) => {
        return rows
    });

    return rows;
}

export async function GetNotes() {
    const conn = await dbConn();

    const rows = await conn.query(`SELECT id, user_id, DATE_FORMAT(created, "%Y-%m-%d") AS "created", title, text FROM ${tableNotes}`).then(([rows]) => {
        return rows
    });

    return rows;
}