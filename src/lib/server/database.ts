import mysql from "mysql2/promise"
import { env } from "$env/dynamic/private";

export type Note = {
    id: number;
    user_id: number;
    created: string;
    title: string;
    text: string;
};

const tableNotes = "notes";
const DB_HOST = env.DB_HOST;
const DB_PORT = +env.DB_PORT; // the plus converts this to an int. this because else the code editor would give an error (and that's just annoying)
const DB_DB = env.DB_DATABASE;
const DB_USER = env.DB_USER;
const DB_PASSWORD = env.DB_PASSWORD;

export function dbConn() {
    const _db = mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        database: DB_DB,
        user: DB_USER,
        password: DB_PASSWORD,
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