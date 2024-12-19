import { subtle, webcrypto } from "crypto";
import mysql from "mysql2/promise"

export type Note = {
    id: number;
    user_id: number;
    title: string;
    text: string;
};

export function dbConn() {
    const _db = mysql.createConnection({
        host: "localhost",
        user: "notes",
        password: "notesdb1234",
        database: "Notes",
    });

    return _db;
}

export async function SaveNote(language: string, noteTitle: string, noteText: string) {
    const conn = await dbConn();

    await conn.query(`INSERT INTO notes(language, title, text) VALUES("${language}", "${noteTitle}", "${noteText}");`);
    const rows = await conn.query(`SELECT * FROM notes WHERE id = @@Identity;`).then(([rows]) => {
        return rows;
    });

    return rows;
}

export async function GetNote(id: number) {
    const conn = await dbConn();

    const rows = await conn.query(`SELECT * FROM notes WHERE id = ${id};`).then(([rows]) => {
        return rows
    });

    return rows;
}

export async function GetNotes() {
    const conn = await dbConn();

    const rows = await conn.query(`SELECT * FROM notes`).then(([rows]) => {
        return rows
    });

    return rows;
}